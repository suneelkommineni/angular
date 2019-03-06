import { Component } from "@angular/core";

@Component({
    selector: 'app-employe',
    templateUrl: './employe.component.html',
    styleUrls: ['./employe.component.css']
  })

  export class EmployeComponent{
    buttonname:any="edit";
    employee:any=[
        {
            "empId":0,
            "empName":"Suneel",
            "empsalary":1,
            "isCurrentEmployee":true,
            "contact":9989010143
        },
        {
            "empId":1,
            "empName":"sai",
            "empsalary":2,
            "isCurrentEmployee":false,
            "contact":123456

        },
        {
            "empId":2,
            "empName":"mani",
            "empsalary":3,
            "isCurrentEmployee":true,
            "contact":789456321

        }
    ];
    val:boolean=true;
    data:any;

    details(id)
    {
 
        console.log(this.employee[id]);
         if(this.val)
        {
            if(id==this.employee[id].empId && this.employee[id].isCurrentEmployee)
            {              
              this.data=this.employee[id].contact;
            }
        
        else
        {
             this.data="Ex-employe";
           
        }
        this.val=false; 

        }
        else{  
            this.val=true; 
            this.data=" ";
        }
    
    }
      }
    
    

  