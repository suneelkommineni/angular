import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({templateUrl: 'login.component.html'})

export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    mainmodel = Array();
    arr: any[]=[];  
    aValue:any;
    storageData: any[]=[];
    loginStatus:boolean=false;
   

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,

     ) {}

    ngOnInit() {
   
            this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
     

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
/* from submitted values */
      var data = this.loginForm.value;
      var formusername = data.username;
      var formpassword = data.password;
   /* from submitted values */  

    //   alert(formusername);
    //   alert(formpassword);


  
  this.storageData= JSON.parse(localStorage.getItem('mainmodel'));
  console.log(this.storageData);  
  for(let i=0;i<this.storageData.length;i++)
  {
      var storageusernames = [];
      var newDta = storageusernames.push(this.storageData[i].firstName);
    if(formusername==this.storageData[i].firstName && formpassword==this.storageData[i].password)
    { 
     alert("Login successfull");
     this.router.navigate(['/home']);
     this.loginStatus=true;
    }    
     
  } 

  if(this.loginStatus == false ){
      alert("login failure");
    this.router.navigate(['/login']);
} 
       
    }
}
