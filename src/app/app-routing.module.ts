import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  DashboardComponent,
  ProductsComponent,
  SignInComponent,
  SignUpComponent,
  UsersComponent
} from './views';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users/list', component: UsersComponent },
  { path: 'e-commerce/products', component: ProductsComponent },
  { path: 'authentication/sign-in', component: SignInComponent },
  { path: 'authentication/sign-up', component: SignUpComponent },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
