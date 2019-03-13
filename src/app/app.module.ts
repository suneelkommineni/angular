//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgDatepickerModule } from 'ng2-datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime'





//Components
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
import { RegisterComponent } from './register/register.component';
import { CountriesService } from './countries.service';
import { ApiserviceService } from './apisintegration/apiservice.service';
import { DatepickerComponent } from './datepicker/datepicker.component';

//import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
// import { DatatableComponent } from './datatable/datatable.component';
import { ApisintegrationComponent } from './apisintegration/apisintegration.component';
import { DynamictableComponent } from './dynamictable/dynamictable.component';
import { EmployeComponent } from './employe/employe.component';
import { ParentcourseComponent } from './parentcourse/parentcourse.component';
import { ChildcourseComponent } from './childcourse/childcourse.component';



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
    {path: 'register',component: RegisterComponent},  
    {path: 'datepicker',component: DatepickerComponent}, 
    // {path: 'datatable',component: DatatableComponent}, 
    {path: 'dynamictable',component: DynamictableComponent}, 
    {path: 'employe',component: EmployeComponent}, 
    {path: 'parentcourse',component: ParentcourseComponent}, 
    

    { path: '**', redirectTo: '' },
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
    ChildComponent,
    RegisterComponent,
    DatepickerComponent,
    // DatatableComponent,
    ApisintegrationComponent,
    DynamictableComponent,
    EmployeComponent,
    ParentcourseComponent,
    ChildcourseComponent,    
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgDatepickerModule,
    BrowserModule, 
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
    ],

  exports: [
    RouterModule
],


  providers: [CountriesService,ApiserviceService],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
