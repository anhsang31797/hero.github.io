import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RXJSComponent implements OnInit {

  public agents: Observable<string> | undefined;
  public agentName : string | null | undefined;

  constructor(){}

  ngOnInit():void{

    this.agents = new Observable(
      function (observer){
        try{
          observer.next('Sang');
          setInterval(()=>{
            observer.next('Hoa');
          },2000);
          setInterval(()=>{
            observer.next('Uyên');
          },5000);

        }
        catch(e){
          observer.error(e);

        }
      }
    );

    this.agents.subscribe(data => {
      //console.log(data);
      this.agentName = data;

    });

  }
}
