import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  /* para componente parent (neste caso o "borad") comunicar
    com o child ("square"). temos que fazer duas coisas
    1 - colocar o decorator @INPUT() nas propriedas que sáo afectadas externamente
    2 - na invocação do componenete child no parent (<app-square> dentro do board.html
    , colocar [value]="algo desse componete parent"
  */ 
  @Input() value: string = "";//quando á comunicação entre componentes temos que criar um decorator, para o componenete filho receber coisas do componente pai
  constructor() { }

  ngOnInit(): void {
  }

}
