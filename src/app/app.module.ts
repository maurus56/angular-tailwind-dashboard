import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  FooterDashboardComponent,
  HeaderComponent,
  NavbarDashboardComponent,
  SidebarComponent
} from './components';
import {
  DashboardComponent,
  PricingComponent,
  ProductsComponent,
  SignInComponent,
  SignUpComponent,
  UsersComponent
} from './views';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    SignUpComponent,
    SignInComponent,
    PricingComponent,
    SidebarComponent,
    ProductsComponent,
    DashboardComponent,
    FooterDashboardComponent,
    NavbarDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
