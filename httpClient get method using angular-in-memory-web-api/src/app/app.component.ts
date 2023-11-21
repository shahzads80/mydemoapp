import { Component } from '@angular/core';
import { BookService } from './bookname.service';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpClient get method using angular-in-memory-web-api';
  softBooks : Book[];
  constructor(private _bookservice:BookService){ }

  ngOnInit()
  {
    this.getsoftbooks();
  }

    getsoftbooks(){
      this._bookservice.getbooksfromstore().subscribe(books=>this.softBooks=books);
    }
 
}
