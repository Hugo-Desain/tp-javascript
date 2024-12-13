class Grid {
  constructor(width, height, dirtyPercentage) {
    this.width = width;
    this.height = height;
    this.grid = this.initializeGrid(dirtyPercentage);
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
      const row = this.grid[y];
      console.log(row.join("|"));
    }
  }
}

const grid3 = new Grid(8, 10, 40);
grid3.displayGrid();
