class Grid {
  constructor(width, height, dirtyPercentage) {
    this.width = width;
    this.height = height;
    this.grid = this.initializeGrid(dirtyPercentage);

    this.posX = Math.floor(Math.random() * width);
    this.posY = Math.floor(Math.random() * height);
  }

  initializeGrid(dirtyPercentage) {
    const grid = [];
    for (let y = 0; y < this.height; y++) {
      const row = [];
      for (let x = 0; x < this.width; x++) {
        const probability = dirtyPercentage / 100;
        if (Math.random() < probability) {
          row.push(" ");
        } else {
          row.push("X");
        }
      }
      grid.push(row);
    }
    return grid;
  }

  displayGrid() {
    console.clear();
    for (let y = 0; y < this.grid.length; y++) {
      const row = [];
      for (let x = 0; x < this.grid[y].length; x++) {
        if (x === this.posX && y === this.posY) {
          row.push("R");
        } else {
          row.push(this.grid[y][x]);
        }
      }
      console.log(row.join("|"));
    }
  }

  clear() {
    if (this.grid[this.posY][this.posX] === " ") {
      console.log(`Nettoyage de la case [${this.posX}, ${this.posY}]`);
      this.grid[this.posY][this.posX] = "X";
    }
  }

  move(direction) {
    let newX = this.posX;
    let newY = this.posY;

    switch (direction) {
      case "haut":
        if (this.posY > 0) newY--;
        break;
      case "bas":
        if (this.posY < this.height - 1) newY++;
        break;
      case "gauche":
        if (this.posX > 0) newX--;
        break;
      case "droite":
        if (this.posX < this.width - 1) newX++;
        break;
      default:
        console.log(`Direction "${direction}" invalide`);
        return;
    }

    console.log(
      `Le robot se déplace de la case [${this.posX}, ${this.posY}] vers [${newX}, ${newY}]`
    );

    this.posX = newX;
    this.posY = newY;
  }

  clearAllBoxes() {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (this.grid[y][x] === " ") {
          return false;
        }
      }
    }
    return true;
  }

  exec() {
    const directions = ["haut", "bas", "gauche", "droite"];

    const loop = () => {
      if (this.clearAllBoxes()) {
        console.log("Toutes les cases sont propres !");
        this.displayGrid();
        return;
      }

      this.displayGrid();
      this.clear();
      const randomIndex = Math.floor(Math.random() * directions.length);
      const direction = directions[randomIndex];
      this.move(direction);

      setTimeout(loop, 1000);
    };

    loop();
  }
}

const grid6 = new Grid(4, 4, 60);
grid6.exec();
