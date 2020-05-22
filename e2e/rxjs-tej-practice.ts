import { of, from, Observable } from 'rxjs'; 
import { map } from 'rxjs/operators';


// const source = of('World').pipe(
//   map(x => `Hello ${x}!`)
// );

// source.subscribe(x => console.log(x));


var obs = from([1,2,3]);
// obs.subscribe(
//   (m)=>console.log(m)
// )

obs
 .pipe(
   map(m=>m*100)
 ).subscribe(
   m=>console.log(m)
 )

 var obs2=of("hello");

 obs2
 .pipe(
   map(m=>m+" tej")
 ).subscribe(
   (m)=>console.log(m),
    err=>console.log(err),
    ()=>console.log("Completion")
 )
const tej={
  next : x=>console.log(x+"  Observer got a new value"),
  error : err=>console.log(err+" YOu have a error"),
  complete:()=>console.log("observer end ")
}
obs2.subscribe(tej)


function tejHandler(observer)
{
  observer.next(100);
  observer.next(2100);
  observer.complete();

}


const obj3 = new Observable(tejHandler);
const tejObj={
  next: x=>console.log(x),
  error :err=>console.log(err),
  complete:()=>console.log('tej created')
}

obj3.subscribe(tejObj)