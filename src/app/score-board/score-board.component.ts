import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent implements OnInit {
  xWinCount: number = 0;
  oWinCount: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
