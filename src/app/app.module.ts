import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SocialmediaiconsComponent } from './socialmediaicons/socialmediaicons.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { FeaturesComponent } from './features/features.component';
import { ContactComponent } from './contact/contact.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
    {path: '', pathMatch: 'full',  redirectTo: 'home'},
    {path: 'login', component: LoginComponent,},
    {path: 'home',component: HomepageComponent},
    {path: 'aboutus',component: AboutusComponent},
    {path: 'portfolio',component: PortfolioComponent},
    {path: 'blog',component: BlogComponent},
    {path: 'featuers',component: FeaturesComponent},
    {path: 'contact',component: ContactComponent},
    {path: 'parent',component: ParentComponent},
    {path: 'child',component: ChildComponent},
  
  ];




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SocialmediaiconsComponent,
    HomepageComponent,
    AboutusComponent,
    PortfolioComponent,
    BlogComponent,
    FeaturesComponent,
    ContactComponent,
    ParentComponent,
    ChildComponent
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
