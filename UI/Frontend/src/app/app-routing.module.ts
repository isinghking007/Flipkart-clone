import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './Test/test/test.component';
import { HomeComponent } from './HomePage/home/home.component';
import { CarosuelComponent } from './Carosuel/carosuel/carosuel.component';
import { PageComponent } from './Product/ProductPage/page/page.component';
import { Test2Component } from './Test/test/test2/test2.component';

const routes: Routes = [
  {
    path:'test',component:TestComponent
  },
  {
    path:'test2',component:Test2Component
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'carosuel',component:CarosuelComponent
  },
  {
    path:'page',component:PageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
