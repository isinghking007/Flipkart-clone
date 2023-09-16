import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './HomePage/home/home.component';
import { HeaderComponent } from './Header/header/header.component';
import { BodyComponent } from './HomePage/home/Body/body/body.component';
import { TestComponent } from './Test/test/test.component';
import { CarosuelComponent } from './Carosuel/carosuel/carosuel.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { PopupComponent } from './Popup/popup/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD

=======
import { ClickOutsideDirective } from './Directive/click-outside.directive';
>>>>>>> afc995af9cca641de21e51d7acda5cc5ed9076b9
import {MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './Login & Signup/Login/login/login.component';
import { RegisterComponent } from './Login & Signup/SignUp/register/register.component';
import {ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BodyComponent,
    TestComponent,
    CarosuelComponent,
    FooterComponent,
    PopupComponent,
<<<<<<< HEAD
   
=======
    ClickOutsideDirective,
>>>>>>> afc995af9cca641de21e51d7acda5cc5ed9076b9
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
