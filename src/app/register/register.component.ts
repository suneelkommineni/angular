import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';



@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
  model: any = {};
  mainmodel = Array();
  data= Array();


    registerForm: FormGroup;
    loading = false;
    submitted = false;

    

    constructor(
      
        private formBuilder: FormBuilder,
        private router: Router) { }
        

    ngOnInit() {
        
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

      //console.log(this.registerForm.value);
         this.model=this.registerForm.value;
        this.mainmodel.push(this.model);
         console.log(this.model);

      if ("mainmodel" in localStorage){

        this.data= JSON.parse(localStorage.getItem('mainmodel'))
        this.data.push(this.model);
        localStorage.setItem("mainmodel",JSON.stringify(this.data));
        this.router.navigate(['/login']);
     //  this.model = {}; 
       }
        
       
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        
  
    }






}
