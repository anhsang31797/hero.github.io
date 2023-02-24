import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private common: CommonService) {  }



  ngOnInit(): void {

  }


  public name = '';



  public submitForm(): void {
    //console.log(this.name);

    this.common.submitData({
      name : this.name,
      age : 12

    });

  }


}
