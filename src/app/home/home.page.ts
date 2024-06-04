import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
export class HomePage {
  cazuelaTitle = 'Cazuela de Vacuno';
  caldilloTitle = 'Caldillo de Congrio';
  curantoTitle = 'Curanto';
  pastelTitle = 'Pastel de Choclo';
  empanadaTitle = 'Empanada de Pino';
  cevicheTitle = 'Ceviche';

  constructor(private alertController: AlertController) {}

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
