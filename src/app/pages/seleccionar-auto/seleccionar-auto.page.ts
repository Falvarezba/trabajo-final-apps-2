import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CATEGORIAS } from 'src/app/core/constants/categorias';

import { CartService } from 'src/app/core/services/cart.service';




@Component({
  selector: 'app-descargar-app',
  templateUrl: './seleccionar-auto.page.html',
  styleUrls: ['./seleccionar-auto.page.scss'],
})
export class SeleccionarAutoPage implements OnInit {

  
  autoActual = CATEGORIAS[0];

  Route = inject(Router)
 

  constructor(private activatedRoute:ActivatedRoute, private cartService:CartService ) {
    activatedRoute.params.subscribe(params => {
      const autoEncontrado = CATEGORIAS.find(  autoActual => autoActual.id == params["id"]);
      console.log(autoEncontrado, "este es el auto encontrado")
      if(autoEncontrado){
        this.autoActual = autoEncontrado;
      }
      console.log(params, "esto es el params")
      
    })

    
   }

  ngOnInit() {
    
  }

  
}