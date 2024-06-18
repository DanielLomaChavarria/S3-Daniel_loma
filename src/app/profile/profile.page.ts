import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AuthService } from '../guards/auth.service'; // Asegúrate de que la ruta es correcta
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  capturedImage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    });

    this.capturedImage = `data:image/jpeg;base64,${image.base64String}`;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirigir al usuario a la página de inicio de sesión
  }
}
