import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookurl = "/api/books";
  constructor(private http: HttpClient) {}

      getbooksfromstore():Observable<Book[]>{
        return this.http.get<Book[]>(this.bookurl);
      }
   
}
