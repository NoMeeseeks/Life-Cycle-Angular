import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  //si no se implementan los ciclos de vida no los usa nunca
  public productoVisible: boolean = false;
  public precioActual: number = 10;

  constructor() {
    console.log('constructor')
  }
  ngOnInit(): void {
    console.log('OnInit')
  }

  //ng on changes solo escucha inputs
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log('OnChanges')
  }
  ngDoCheck(): void {
    console.log('DoCheck')
  }
  //cuando el contenido se inicializado
  ngAfterContentInit(): void {
    console.log('AfterConatntInit')
  }
  //cuando se verifica que se inicializo
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked')
  }
  //cuando ya se realizo las modificaciones
  ngAfterViewInit(): void {
    console.log('AfterViewInit')
  }
  //verificar si las modificaciones
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked')
  }
  //hay que manejarlo bien porque nosotros cuando no limpiamos nuestro despues de hacer algo
  //podemos tener problemas de memoria o algun proceso se dispara dos veces
  //
  ngOnDestroy(): void {
    console.log('OnDestroy')
  }

  incrementarPrecio() {
    this.precioActual++;
  }
}
