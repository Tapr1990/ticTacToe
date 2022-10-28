import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit { 

  squares: string[] = Array(9).fill("");// aqui dizemos que o array vai ter 9 posiçoes e vai ter strings vazias
  xIsNext: boolean = true;
  winner: string = "";

  /* 
    gerar um "getter" para a priproidade "player"
    isto vai-me infoirmar queal o jogador actual, se x ou o
  */ 
  get player() {
    return this.xIsNext ? "X" : "O";
  }

  constructor() { }

  ngOnInit(): void {
  }

  newGame(): void {
    this.squares = Array(9).fill("");
    this.winner = "";
    this.xIsNext = true;
    
  }


  calculateWinner(): string {//ele está á espera de retornar sempre uma string
    
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for(let line of lines) {
      const [a, b, c] = line;

      if(
          this.squares[a] &&
          this.squares[a] == this.squares[b] &&
          this.squares[a] == this.squares[c]
        ){
          return this.squares[a]// x ou o
        }
    }

    return "";// se ninguem venceu retornar vazio
  }

  makeMove(i: number): void {

    //console.log("clicaste no " + i);
    if(this.squares[i] == "" && !this.winner) {
      this.squares[i] = this.player;

  
      this.xIsNext = !this.xIsNext;//vai alterar do X para o O, dizando que x vai passar a ser falso

    }

    this.winner = this.calculateWinner()
  }

}
