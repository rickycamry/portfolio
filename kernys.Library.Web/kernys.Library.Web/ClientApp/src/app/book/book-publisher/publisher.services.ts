import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publisher } from 'src/app/core/interfaces/publisher';

@Injectable({
    providedIn:'root'
})

export class PublisherService{

    constructor(private http:HttpClient, 
                @Inject('BASE_URL') private baseUrl:string){

                    this.baseUrl+='api/publisher';

    }

    getPublishers():Observable<Publisher[]>{

      return this.http.get<Publisher[]>(this.baseUrl);
    }

    getPublisherByBookId(bookId:number):Observable<Publisher>{

        return this.http.get<Publisher>(this.baseUrl+`/${bookId}`);
      }

    addPublisher(publisher:Publisher, bookId:number):Observable<Publisher>{

        return this.http.post<Publisher>(this.baseUrl+`/${bookId}`,publisher);

    }

    updatePublisher(publisher:Publisher, bookId:number):Observable<Publisher>{

        return this.http.put<Publisher>(this.baseUrl+`/${bookId}`,publisher);

    }
  
    deletePublisher(bookId:number, publisherId:number):Observable<any>{

        return this.http.delete(this.baseUrl+`/${publisherId}/${bookId}`);
    }

}