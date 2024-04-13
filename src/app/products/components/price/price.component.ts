import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price: number = 0;

  //cuando se maneja observable se pone un simbol de dolar
  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('OnInitPrice HIJO');
    //interval es un observable que emite valores de manera secuencial basado en un periodo de tiempo
    this.interval$ = interval(1000).subscribe(valor => {
      console.log(valor)
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChangesPrice HIJO');
    console.log({ changes });
  }
  ngOnDestroy(): void {
    console.log('OnDestroyPrice HIJO');
    //el unsubscribe va a cancelar al subcripscion
    this.interval$?.unsubscribe()
  }
}
