import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Post from "src/post.model";
import {map} from 'rxjs/operators';

@Injectable({'providedIn': 'root'})
export class PostService{

    constructor(private http:HttpClient){}
    createAndStorePost(title:string,content:string){
        const postData:Post = { title , content }
        return this.http.post<{name:string}>('https://angulat-http-12365-default-rtdb.firebaseio.com/posts.json', postData);
    }

    fetchPosts(){
       return this.http.get<{[key:string]: Post}>('https://angulat-http-12365-default-rtdb.firebaseio.com/posts.json')
        .pipe(map((resData)=>{
          const posts: Post[] = [];
          for(const key in resData){
            if(resData.hasOwnProperty(key))
               posts.push({...resData[key], id: key})
          }
          return posts;
        }));
    }


    deletePosts(){
       return this.http.delete('https://angulat-http-12365-default-rtdb.firebaseio.com/posts.json');
    }



}