import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apisintegration/apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-apisintegration',
  templateUrl: './apisintegration.component.html',
  styleUrls: ['./apisintegration.component.css']
})
export class ApisintegrationComponent implements OnInit {

  constructor(public rest:ApiserviceService, private route: ActivatedRoute, private router: Router) { }
  products:any = [];


  ngOnInit() {    
      $(document).ready(function() {
      $('#example').DataTable();
  } );
      this.getProducts();
  }

  getProducts() {
    this.products = [];
    this.rest.getProducts().subscribe((data: {}) => {
    console.log(data);
    this.products = data;
    });
  }

}