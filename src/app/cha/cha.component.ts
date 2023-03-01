import { Component } from '@angular/core';

@Component({
  selector: 'app-cha',
  templateUrl: './cha.component.html',
  styleUrls: ['./cha.component.css']
})
export class ChaComponent {
  public parentProp = '123';
  onDataReceived(data: string) {
    console.log('DATA:', data);
  }
}
