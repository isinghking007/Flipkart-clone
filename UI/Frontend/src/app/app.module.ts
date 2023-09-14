import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './HomePage/home/home.component';
import { HeaderComponent } from './Header/header/header.component';
import { BodyComponent } from './HomePage/home/Body/body/body.component';
import { TestComponent } from './Test/test/test.component';
import { CarosuelComponent } from './Carosuel/carosuel/carosuel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BodyComponent,
    TestComponent,
    CarosuelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
