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


      alert('jashi');  
      console.log('jashi');
      var data = this.loginForm.value;
      var formusername = data.username;
      var formpassword = data.password;
      // console.log(formusername);
     // console.log(formpassword);

  this.aValue = localStorage.getItem('mainmodel');

  for (var key in this.aValue) {
      
        console.log(this.aValue[key]);    
}

        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
       
    }
}
