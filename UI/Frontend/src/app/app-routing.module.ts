import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './Test/test/test.component';
import { HomeComponent } from './HomePage/home/home.component';
import { CarosuelComponent } from './Carosuel/carosuel/carosuel.component';

const routes: Routes = [
  {
    path:'test',component:TestComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'carosuel',component:CarosuelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
