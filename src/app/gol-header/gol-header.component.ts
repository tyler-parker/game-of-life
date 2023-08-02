import { Component, OnInit, HostListener } from '@angular/core';
import { GameOfLife } from './game';

@Component({
  selector: 'app-gol-header',
  templateUrl: './gol-header.component.html',
  styleUrls: ['./gol-header.component.css']
})
export class GOLHeaderComponent implements OnInit {
  game!: GameOfLife;
  interval: any;
  cellWidth = 10; // width of a cell in pixels
  cellHeight = 10; // height of a cell in pixels
  headerHeight = window.innerHeight * 0.2; // 20% of the viewport height
  numberOfColumns = Math.floor(window.innerWidth / this.cellWidth);
  numberOfRows = Math.floor(this.headerHeight / this.cellHeight);

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustGridSize();
  }

  ngOnInit() {
    this.adjustGridSize();
  }

  adjustGridSize() {
    this.game = new GameOfLife(this.numberOfRows, this.numberOfColumns);
    this.interval = setInterval(() => this.game.nextGeneration(), 100);
  }

  resetGame(event?: Event){
    console.log('Before reset:', this.game);
    this.adjustGridSize()
    console.log('After reset:', this.game);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
