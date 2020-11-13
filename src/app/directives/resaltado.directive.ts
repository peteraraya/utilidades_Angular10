import { Directive, 
        ElementRef, 
        HostListener,
        Input
      } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(
    private el: ElementRef
  ) {
    console.log('Directiva llamada');
    // el.nativeElement.style.backgroundColor = 'blue ';
   }

  @Input('appResaltado') nuevoColor: string;

   @HostListener('mouseenter') mouseEntro(){
    // llamar al metodo privado
     this.resaltar( this.nuevoColor || 'yellow' );
    //  console.log(this.nuevoColor);
    //  this.el.nativeElement.style.backgroundColor = 'blue';
   }
   @HostListener('mouseleave') mouseSalio(){
     this.resaltar(null);
    //  this.el.nativeElement.style.backgroundColor = null;
   }


   private resaltar( color: string ){
        this.el.nativeElement.style.backgroundColor = color;
    }


  }

// el el es todo el objeto