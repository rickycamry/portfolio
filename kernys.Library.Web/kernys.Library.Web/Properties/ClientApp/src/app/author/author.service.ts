import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Author } from "../core/interfaces/author";

@Injectable({
   providedIn:'root'
})
export class AuthorService{

    url:string;
    constructor(private http:HttpClient,
                @Inject('BASE_URL') private baseUrl:string) {

     this.url=this.baseUrl+'api/author';
    }

    getAuthors():Observable<Author[]>{

       return this.http.get<Author[]>(this.url);
    }
  
    getAuthor(id:number):Observable<Author>{
  
        let newUrl=this.url+'/'+id;
        return this.http.get<Author>(newUrl);
     }

     postAuthor(author:Author):Observable<Author>{

        return this.http.post<Author>(this.url,author);
     }

     putAuthor(author:Author):Observable<Author>{

        return this.http.put<Author>(this.url,author);
     }
      
     //TO DO: Delete method!!!

   
}