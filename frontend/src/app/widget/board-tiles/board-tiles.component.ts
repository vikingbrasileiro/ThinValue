import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-tiles',
  templateUrl: './board-tiles.component.html',
  styleUrls: ['./board-tiles.component.scss']
})
export class BoardTilesComponent implements OnInit {

  @Input() hand: string;
  tileWidth: string = '50';
  tileHeight: string = '50';
  @Input() raiseFrequency: string;
  @Input() callFrequency: string;
  foldFrequency: string = '0';

  constructor() { }

  ngOnInit(): void {
  }

}
