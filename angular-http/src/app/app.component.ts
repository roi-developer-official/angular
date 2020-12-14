import { Component, OnInit, ViewChild } from '@angular/core';
import Post from '../post.model'
import { PostService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  isFetching = false;
  error = null;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.isFetching = true;
    this.postService.fetchPosts()
      .subscribe(resData => {
        this.loadedPosts = resData;
        this.isFetching = false
      },error=>{
        this.error = error.message
      })
  }


  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title, postData.content)
    .subscribe(()=>{}, 
       error=>this.error = error.message
    )

  }


  onFetchPosts() {
    this.isFetching = true;
    this.postService.fetchPosts()
      .subscribe(resData => {
        this.loadedPosts = resData;
        this.isFetching = false
      },error=>{
        this.error = error.message
      })

  }


  onClearPosts() {
    this.postService.deletePosts().subscribe(()=>{
      this.loadedPosts = [];
    },error=>{
      this.error = error.message
    })
  }


}
