import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";

import { Book } from "../core/interfaces/book";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[];



  constructor(private http: HttpClient,
    @Inject('BASE_URL') private baseURl: string) {

      this.baseURl+='api/book';


  }

  getBooks(): Observable<Book[]> {

  

    return this.http.get<Book[]>(this.baseURl);


  }

  getUserBooks(): Observable<Book[]> {

    let url: string = this.baseURl + '/userbooks';

    return this.http.get<Book[]>(url);


  }

  getUserBook(bookId: number): Observable<Book> {

    let url: string = this.baseURl + '/userbook/' + bookId;

    return this.http.get<Book>(url);

  }

  getBook(id: number): Observable<Book> {

    let url: string = this.baseURl + '/' + id;

    return this.http.get<Book>(url);
  }

  addBook(book: Book): Observable<Book> {
   
    return this.http.post<Book>(this.baseURl, book);
  }
  updateBook(book: Book): Observable<Book> {
   
    return this.http.put<Book>(this.baseURl, book);
  }

  deleteBook(bookId:number):Observable<any>{
   
    return this.http.delete(this.baseURl+'/'+bookId);
  }

}



