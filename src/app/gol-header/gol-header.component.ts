import { Component, OnInit } from '@angular/core';
import { GameOfLife } from './game';

@Component({
  selector: 'app-gol-header',
  templateUrl: './gol-header.component.html',
  styleUrls: ['./gol-header.component.css']
})
export class GOLHeaderComponent implements OnInit {
  game!: GameOfLife;
  interval: any;

  ngOnInit() {
    this.game = new GameOfLife(50, 50); // Grid size 50x50
    this.interval = setInterval(() => this.game.nextGeneration(), 100);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
