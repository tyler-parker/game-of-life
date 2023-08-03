import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { GameOfLife } from './game';

@Component({
  selector: 'app-gol-header',
  templateUrl: './gol-header.component.html',
  styleUrls: ['./gol-header.component.css']
})
export class GOLHeaderComponent implements OnInit {
  game!: GameOfLife;
  interval: any;
  cellWidth = 10;
  cellHeight = 10;
  headerHeight = window.innerHeight * 0.2;
  numberOfColumns = Math.floor(window.innerWidth / this.cellWidth);
  numberOfRows = Math.floor(this.headerHeight / this.cellHeight);

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustGridSize();
  }

  ngOnInit() {
    this.adjustGridSize();
  }

  adjustGridSize(): void {
    const { clientWidth, clientHeight } = document.documentElement;

    this.numberOfColumns = Math.floor(clientWidth / this.cellWidth);
    this.numberOfRows = Math.floor(clientHeight / this.cellHeight);

    this.resetGame();
  }

  resetGame(event?: Event){
    this.game = new GameOfLife(this.numberOfRows, this.numberOfColumns);
    this.interval = setInterval(() => this.game.nextGeneration(), 10);
  }

  triggerReset() {
    this.resetRequest.emit();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  @Output() resetRequest = new EventEmitter<void>();
}
