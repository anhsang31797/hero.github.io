import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public name = "123";
  public age = 18;
  public cars = ["xe1","xe2","xe3","","","","","","","","","","","","","",""];

  constructor() {  }

   public ngOnInit(): void {

  }

  public buttonReset(): void {
    debugger;
    this.name = "";

  }
}
