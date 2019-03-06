import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

function passwordConfirming( c: AbstractControl): any {
    if(!c.parent || !c) return;
    const pwd = c.parent.get('password');
    const cpwd = c.parent.get('confirmpassword');

    if(!pwd || !cpwd) return ;
    if (pwd.value !== cpwd.value) {
        return { invalid: true };
    }
}


@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
  model: any = {};
  mainmodel = Array();
  data= Array();


    registerForm: FormGroup;
    loading = false;
    submitted = false;

    get cpwd() {
        return this.registerForm.invalid;
    }

    constructor(
      
        private formBuilder: FormBuilder,
        private router: Router) { }
        

    ngOnInit() {
            this.registerForm = this.formBuilder.group({                
            firstName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
            lastName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]], 
            gender: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],     
            cn: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^[0-9]+$') ]], 
            password: ['', [Validators.required,Validators.minLength(6)]],
            confirmpassword: ['', [Validators.required,Validators.minLength(6) ,  passwordConfirming ]],
            employeid: ['', [Validators.required,Validators.minLength(4) ]],
        });
    }

    // convenience getter for easy access to form fields
    get f() { 
        return this.registerForm.controls; 
    }

    onSubmit() {
        
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return ;
        }

    //   console.log(this.registerForm.value);
         this.model=this.registerForm.value;
          this.mainmodel.push(this.model);
         console.log(this.model);
        //  localStorage.setItem("mainmodel",JSON.stringify(this.data));

      if ("mainmodel" in localStorage){
          console.log('jashi');
        this.data= JSON.parse(localStorage.getItem('mainmodel'));
        console.log('jashi2');
        console.log(this.data);
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
