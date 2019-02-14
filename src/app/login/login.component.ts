import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {

  title: string;
  myHero: string;
  dataset:any;

  constructor() {

    this.title = 'Tour of Heroes';
    this.myHero = 'Windstorm';

    this.dataset = [
      {
      "name":"Suneel",
      "age":30,
      "cars":[ "Ford", "BMW", "Fiat" ],
      "prevEXp":[{"company":"synvers","years":"2"},{"company":"ipay","years":"2"}]
      },
      {
      "name":"sai",
      "age":20,
      "cars":[ "indica", "Baleno", "shift" ],
      "prevEXp":[{"company":"IBM","years":"1"},{"company":"kellton","years":"0"}]
      }
      ];  
      
   }

  ngOnInit() {

  

  }

}
