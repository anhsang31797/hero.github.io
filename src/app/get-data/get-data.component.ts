import { Component, OnInit } from '@angular/core';
import { HttpPostService } from '../Services/http-post.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {

  constructor(private httpServer: HttpPostService) {  }

  public ngOnInit(): void {
    debugger;
    this.httpServer.getCommentsUser().subscribe((data) => {
debugger;
      console.log('getCommentsUser',data.results);
    });

  }


}
