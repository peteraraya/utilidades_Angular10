import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p style="font-size: 10px">Esta es una etiqueta forma 1</p>
    <p [ngStyle]="{ 'font-size': tamano + 'px', color: 'red' }">
      Esta es una etiqueta [ngStyle]
    </p>
    <p [style.fontSize]="'40px'">
      Esta es una etiqueta [style.fontSize]="'40px'"
    </p>
    <p [style.fontSize.px]="tamano">Esta es una etiqueta [style.fontSize.px]</p>

    <button class="btn btn-primary" (click)="tamano = tamano + 5">
      <i class="fas fa-plus    "></i>
      aumentar size 5
    </button>
    <button class="btn btn-danger ml-4" (click)="tamano = tamano - 5">
      <i class="fas fa-minus    "></i>
      disminuir 5
    </button>
  `,
  styles: [],
})
export class NgStyleComponent implements OnInit {
  tamano = 30;

  constructor() {}

  ngOnInit(): void {}
}
