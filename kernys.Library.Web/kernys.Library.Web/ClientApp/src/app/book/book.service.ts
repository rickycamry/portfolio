import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";

import { Book } from "../core/interfaces/book";
import { Observable } from "rxjs";

@Injectable({
  providedIn:'root'
})
export class BookService{
    books:Book[];

   

    constructor(private http:HttpClient,
                @Inject('BASE_URL') private baseURl:string) {
     
       
    }

    getBooks():Observable<Book[]>{
 
       let url:string=this.baseURl+'api/book';
     
      return  this.http.get<Book[]>(url);
        
        
    }

    getBook(id:number):Observable<Book>{

       let url:string=this.baseURl+'api/book/'+id;
      
        return this.http.get<Book>(url); 
    }

   }



  