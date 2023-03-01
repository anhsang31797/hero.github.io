import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-conn',
  templateUrl: './conn.component.html',
  styleUrls: ['./conn.component.css']
})
export class ConnComponent {
  @Output() dataEmitter = new EventEmitter<string>();

  onClick() {
    this.dataEmitter.emit('Đây là dữ liệu con');
  }
}
