import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ApiService } from '../services/api.service';
import { Observable, of } from 'rxjs';
import { Plato } from '../models/plato.model'; // Asegúrate de tener este modelo definido
import { CartService } from '../services/cart.service'; // Importar CartService

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', [
        animate(1000)
      ]),
    ]),
    trigger('slideIn', [
      state('void', style({
        transform: 'translateX(100%)',
        opacity: 0
      })),
      transition('void => *', [
        animate('0.5s ease-out', style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ])
    ])
  ]
})
export class HomePage implements OnInit {
  platos$: Observable<Plato[]> = of([]); // Inicialización de la propiedad

  constructor(
    private apiService: ApiService,
    private alertController: AlertController,
    private cartService: CartService // Inyectar CartService
  ) {}

  ngOnInit() {
    this.platos$ = this.apiService.getPlatos();
    this.platos$.subscribe(data => {
      console.log(data); // Verifica los datos en la consola
    });
  }

  addToCart(plato: Plato) {
    this.cartService.addToCart(plato);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
