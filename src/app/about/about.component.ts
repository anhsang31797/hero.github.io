import { CommonService } from './../Services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public loginUser = 'admin';
  public myColor = 'green';

  public counter = 0;
  public counterBinhPhuong = 0;

  public ngOnInit (){
    this.counter = this.common.getNumber();
    this.counterBinhPhuong = this.common.binhPhuong(this.common.getNumber());
  }

  public tang() : void{
    this.common.tang();

    this.counter = this.common.getNumber();
    this.counterBinhPhuong = this.common.binhPhuong(this.common.getNumber());

  }

  constructor (private common: CommonService){}



}



