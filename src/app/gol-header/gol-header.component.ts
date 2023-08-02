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

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustGridSize();
  }

  ngOnInit() {
    this.game = new GameOfLife(50, 50); // Grid size 50x50
    this.interval = setInterval(() => this.game.nextGeneration(), 100);
  }

  adjustGridSize() {
    const cellWidth = 10; // width of a cell in pixels
    const cellHeight = 10; // height of a cell in pixels
    const headerHeight = window.innerHeight * 0.2; // 20% of the viewport height
    const numberOfColumns = Math.floor(window.innerWidth / cellWidth);
    const numberOfRows = Math.floor(headerHeight / cellHeight);

    this.game = new GameOfLife(numberOfRows, numberOfColumns);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
