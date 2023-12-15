// search-apps.component.ts
import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { CATEGORIAS } from '../constants/categorias';

@Component({
  selector: 'app-search-apps',
  templateUrl: './search-autos.component.html',
  styleUrls: ['./search-autos.component.scss'],
})
export class SearchAutosComponent {
  terminoBusqueda: string = '';
  autosEncontrados: string[] = [];

  constructor(private CartService: CartService, private router: Router) {
    // Puedes inicializar variables o realizar otras tareas de configuración aquí
  }

  buscarAuto(termino: string): void {
    
    console.log(this.buscarAuto)
    this.autosEncontrados = this.CartService.buscarAuto(termino)

    
  }

  compararAuto(autoEncontrado: string): void {
    const autoEncontradoIndex = CATEGORIAS.findIndex(app => app.nombre === autoEncontrado);
    if (autoEncontradoIndex !== -1) {
      const autoId = CATEGORIAS[autoEncontradoIndex].id;
      this.router.navigate(['Alquilar-auto', autoId]);
    } else {
      console.log('El auto no se encontró en la lista');
    }
    console.log(autoEncontradoIndex, "autoEncontrado index")
    console.log(this.compararAuto,"este es el console log de compararAuto")
  }
}