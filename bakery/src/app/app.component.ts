import { Component, OnInit } from '@angular/core';
import { ServicesService, User } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  /*constructor(public serviceService: ServicesService){}
  title = 'bakery'; 

  //ngif
  displayName=true;

  //switch
  public color="blue";

  //ngFor
  public colors=["red","blue", "green", "yellow"];

  //pipes
  public name="Codevolution";
  public message="Welcome to codevolution";

  public person = {
    "firstName":"John",
    "lastName":"Doe"
  }

  
  //service
   employees:User[] = [];

  public date= new Date();
  public errorMsg!: string;
  //implementazione osservables
  ngOnInit(): void {
    this.employees = this.serviceService.getEmployees();

  }

*/
ngOnInit(){}
}