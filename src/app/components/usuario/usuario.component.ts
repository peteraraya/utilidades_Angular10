import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  constructor(
              private router: ActivatedRoute
            ) {
         // uso de parametros de las rutas O Tthis.router.parent.params
          this.router.params.subscribe( parametros => {
           console.log('Ruta Hija');
           console.log(parametros);
         });
   }

  ngOnInit(): void {
  }

}
