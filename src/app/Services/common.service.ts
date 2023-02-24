import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  private counter = 0;

  public binhPhuong(n: number): number {
    return n * n;
  }

  public tang(): void {
    this.counter++;
    this.setNumber(this.counter);
  }

  public getNumber(): number {
    return this.counter;
  }

  public setNumber(n: number) {
    this.counter = n;
  }


  public submitData(n: any): void {
    debugger;
    console.log('thành công' + n);
  }



}
