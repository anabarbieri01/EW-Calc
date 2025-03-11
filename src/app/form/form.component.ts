import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  num1: number =0;
  num2: number = 0;
  soma: number =0;

  onClickBotaoSomar() {
  
    this.soma = this.num1 + this.num2;

}

}
