import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs'
import { map ,filter} from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private interval: Subscription;
  private firstObsSubscription: Subscription;


  ngOnInit(): void {
    //one way:
    //  this.interval = interval(1000).subscribe(
    //     (count)=>console.log(count))

    //second way:
    const customObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('count is bigger 3!'))
        }
        count++;
      }, 1000)
    });

    this.firstObsSubscription =  customObservable.pipe(filter(data=>data > 0),map((data:number)=>'Round: ' + data))
    .subscribe(
    data => 
    {
      console.log(data);
    }, 
    error => 
    {
      console.log(error.message)
    },
    () => 
    {
      console.log('completed')
    }
    )
  
  }

  ngOnDestroy(): void {
    //one way:
    // this.interval.unsubscribe();

    this.firstObsSubscription.unsubscribe();
  }


}
