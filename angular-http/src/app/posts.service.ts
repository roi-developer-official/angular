import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Post from "src/post.model";
import {catchError, map, tap} from 'rxjs/operators';
import {of, throwError} from 'rxjs'

@Injectable({'providedIn': 'root'})
export class PostService{

    constructor(private http:HttpClient){}
    createAndStorePost(title:string,content:string){
        const postData:Post = { title , content }
        return this.http.post<{name:string}>('', postData,
        {
           // get the response, also 'body' to get the body of the req
           observe: 'response'
        });
 
    }

    fetchPosts(){
       return this.http.get<{[key:string]: Post}>('',
       {
          headers: new HttpHeaders({"Custon-Header": "hello"}),
          params: new HttpParams().set('print', 'pretty')
       })
        .pipe(map((resData)=>{
          const posts: Post[] = [];
          for(const key in resData){
            if(resData.hasOwnProperty(key))
               posts.push({...resData[key], id: key})
          }
          return posts;
        }),
        catchError(errorRes=>{
           return throwError(errorRes)
        })
        );
    }


    deletePosts(){
       return this.http.delete('',
       {
          observe : 'events',
          responseType : 'text'
       }
       ).pipe(tap(event=>{
          if(event.type === HttpEventType.Sent){

          }
          if(event.type === HttpEventType.Response){
             console.log(event.body)
          }
      
       }));
    }



}