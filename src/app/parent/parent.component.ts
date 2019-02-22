import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-parent',
  templateUrl:  './parent.component.html',
  styleUrls: ['./parent.component.css'] 
})
export class ParentComponent implements OnInit {

  constructor() { }

ngOnInit(){

  $(document).ready(function() {
    $('#example').DataTable();
} );

}

}