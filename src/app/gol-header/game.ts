export class GameOfLife {
  grid: boolean[][];
  rows: number;
  cols: number;

  constructor(rows: number, cols: number) {
    this.rows = rows;
    this.cols = cols;
    this.grid = Array(rows).fill(null).map(() => Array(cols).fill(false));
    this.initialize();
  }

  initialize() {
    // Randomly populate the grid
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        this.grid[row][col] = Math.random() < 0.2;
      }
    }
  }

  nextGeneration() {
    const newGrid = Array(this.rows).fill(null).map(() => Array(this.cols).fill(false));
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        const aliveNeighbors = this.countAliveNeighbors(row, col);
        if (this.grid[row][col]) {
          newGrid[row][col] = aliveNeighbors === 2 || aliveNeighbors === 3;
        } else {
          newGrid[row][col] = aliveNeighbors === 3;
        }
      }
    }
    this.grid = newGrid;
  }

  countAliveNeighbors(row: number, col: number): number {
    let count = 0;
    for (let r = -1; r <= 1; r++) {
      for (let c = -1; c <= 1; c++) {
        if (r === 0 && c === 0) continue;
        const newRow = row + r;
        const newCol = col + c;
        if (newRow >= 0 && newRow < this.rows && newCol >= 0 && newCol < this.cols) {
          if (this.grid[newRow][newCol]) count++;
        }
      }
    }
    return count;
  }
}
