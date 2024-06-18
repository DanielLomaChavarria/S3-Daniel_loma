import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Añade CUSTOM_ELEMENTS_SCHEMA
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './reducers';
import { AppEffects } from './effects/app.effects';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './guards/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CartService } from './services/cart.service';
import { CommonModule } from '@angular/common';

@NgModule({
declarations: [AppComponent],
imports: [
BrowserModule,
IonicModule.forRoot(),
AppRoutingModule,
BrowserAnimationsModule,
HttpClientModule,
StoreModule.forRoot(reducers, { metaReducers }),
EffectsModule.forRoot([AppEffects]),
!environment.production ? StoreDevtoolsModule.instrument() : [],
CommonModule
],
providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AuthGuard, AuthService,CartService],
schemas: [CUSTOM_ELEMENTS_SCHEMA], // Añade CUSTOM_ELEMENTS_SCHEMA aquí
bootstrap: [AppComponent],
})
export class AppModule {}