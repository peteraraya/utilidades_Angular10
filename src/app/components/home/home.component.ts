import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy,
} from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>

    <app-css></app-css>

    <p>Hola un parrafo de app componente</p>

    <app-clases></app-clases>

    <p appResaltado>Hola Mundo !!</p>

    <p [appResaltado]="'blue'">Hola Mundo !!</p>

    <app-ng-switch></app-ng-switch>
  `,
  styles: [],
})
export class HomeComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy {
  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(): void {
    console.log('OnChanges');
  }
  ngDoCheck(): void {
    console.log('DoCheck');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
}
