import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
    data: {
      title: 'shopping-cart'
    }
  },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]


})
export class AppRoutingModule { }
