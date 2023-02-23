import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public name = '123';
  public age = 18;
  public cars = [
    'xe1',
    'xe2',
    'xe3',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ];
  public carsObj = [
    {
      name: 'Honda',
      price: 500000,
    },
    {
      name: 'Toyota',
      price: 1000000,
    },
    {
      name: 'Ford',
      price: 2000000,
    },
    {
      name: 'BMW',
      price: 3000000,
    },
  ];

  public citis = [
    {
      name: 'TP.HCM',
      values: ['HCM Quan 1', 'Quan 2', 'Quan 3', 'Quan 4'],
    },
    {
      name: 'Ha Noi',
      values: ['Ha Noi Quan 1', 'Quan 2', 'Quan 3', 'Quan 4'],
    },
    {
      name: 'Da Nang',
      values: ['Da Nang Quan 1', 'Quan 2', 'Quan 3', 'Quan 4'],
    },
  ];
  public districts : string[] = [];

  public onChangeThanhPho(event : any) : void
  {
    const city = event.target.value;
    if (!city) {
      return;
    }

    // const search = this.citis.filter(c=>c.name === city);

    // if (search && search.length > 0){
    //   this.districts = search[0].values;
    // }

    this.districts = this.citis.find(x=>x.name === city)?.values || [];





    console.log('event',city);
  }

  constructor() {}

  public ngOnInit(): void {}

  public buttonReset(): void {
    debugger;
    this.name = '';
  }
}
