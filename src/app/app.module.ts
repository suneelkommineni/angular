import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SocialmediaiconsComponent } from './socialmediaicons/socialmediaicons.component';



const routes: Routes = [
  
  {
      path: '',
      component: AppComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
}];




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SocialmediaiconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
    ],
  exports: [
    RouterModule
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
