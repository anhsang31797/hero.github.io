import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RXJSComponent implements OnInit {
  public agents: Observable<string> | undefined;
  public agentName: string | null | undefined;

  public arrayStudents = ['Sang', 'Hoa', 'Uyên'];
  public listStudents = 'Sang';
  public objectStudents = [
    {
      id: 1,
      name: 'Sang',
    },
    {
      id: 2,
      name: 'Hoa',
    },
    {
      id: 3,
      name: 'Uyên',
    },
  ];

  //public students: Observable<string[]> | undefined = of(this.arrayStudents);

  //public students: Observable<string> | undefined = of(this.listStudents);

  public students$: Observable<any> | undefined = of(this.listStudents);

  constructor() {}

  ngOnInit(): void {
    this.agents = new Observable(function (observer) {
      try {
        observer.next('Sang');
        setInterval(() => {
          observer.next('Hoa');
        }, 2000);
        setInterval(() => {
          observer.next('Uyên');
        }, 5000);
      } catch (e) {
        observer.error(e);
      }
    });

    this.agents.subscribe((data) => {
      //console.log(data);
      this.agentName = data;
    });

    // this.students?.subscribe((data) => {
    //   console.log(data);
    // });

    this.students$?.subscribe((data) => {
      console.log(data);
    });

    // ep 4

    // of
  }
}
