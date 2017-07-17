import $ from 'jquery';
import Rx from 'rxjs/Rx';
const btn = $('#btn');
const inp = $('#input');
const output = $('#output');
const pos = $('#post');
const btnStream$ = Rx.Observable.fromEvent(btn, 'click');
const numbers = [11, 23, 42, 4, 2, 4, 56, 7, 32, 1, 45, 2];
/*btnStream$.subscribe(
 function (e) {
 console.log('clicked', e);
 },
 function (err) {
 console.log(err
 )
 },
 function () {
 console.log("completed");
 }
 );
 const inp$ = Rx.Observable.fromEvent(inp, 'keyup');
 inp$.subscribe(
 function (e) {
 console.log(e.target.value);
 output.append(e.target.value);
 }
 );*/
/*
 const move$ = Rx.Observable.fromEvent(document, 'mousemove');
 move$.subscribe(
 function (e) {
 //console.log(e.target.value);
 output.html('<h2> X:'+e.clientX+' Y:'+e.clientY+'</h2>');
 }
 );*/
/*const number$ = Rx.Observable.from(numbers);
 number$.subscribe(
 e => {
 console.log(e);
 },
 complete => {
 console.log('completed');
 }
 );
 const post = [
 {title: "post one", body: "this is body"},
 {title: "post two", body: "this is body"},
 {title: "post three", body: "this is body"},
 {title: "post four", body: "this is body"},
 ];
 const post$ = Rx.Observable.from(post);
 post$.subscribe(
 post => {
 console.log(post.body);
 pos.append('<li><h2>' + post.title + '</h2>'+post.body+'</li>')
 }
 )*/
//Observer create
/*

 ; const source$ = new Rx.Observable(observer => {
 console.log("creating Observable");
 observer.next("Hello World");
 observer.next("Another value");
 observer.error(new Error("Error:something went wrong"));
 setTimeout(() => {
 observer.next('Yet another value');
 observer.complete();
 },3000);

 });
 source$
 .catch(err=>Rx.Observable.of(err))
 .subscribe(
 x => {
 console.log(x);
 },
 error => {
 console.log(error)
 },
 complete => {
 console.log('complete');
 }
 )
 */
//promise
/*
 const myPromise = new Promise((resolve, reject) => {
 console.log("creating Promise");
 setTimeout(() => {
 resolve('Hello from promise');
 }, 3000);
 });*/
/*myPromise.then(x => {
 console.log(x);
 });*/
/*
 const source$ = Rx.Observable.fromPromise(myPromise);
 source$.subscribe(
 x => {
 console.log(x);
 }
 );*/

/*function getUser(username) {
 return $.ajax({
 url: 'https://api.github.com/users/' + username,
 dataType: 'jsonp'
 }).promise();
 };
 Rx.Observable.fromPromise(getUser('sangramsam'))
 .subscribe(x => {
 console.log(x);
 });*/

//time interval and range
//Rx.Observable.interval(1000).take(5).subscribe(x => console.log(x));

//timer
//Rx.Observable.timer(3000,2000).take(5).subscribe(x => console.log(x));

//range
//Rx.Observable.range(25,2).subscribe(x => console.log(x));

//MAP
//Rx.Observable.interval(1000).take(10).map(v => v * 2).subscribe(v => console.log(v));
//Rx.Observable.from(['Sam', 'Sneha', 'Vikkee', 'Abc']).map(v => v.toUpperCase()).subscribe(v => console.log(v));
const post = [
    {title: "post one", body: "this is body"},
    {title: "post two", body: "this is body"},
    {title: "post three", body: "this is body"},
    {title: "post four", body: "this is body"},
];
//plunk
/*Rx.Observable.from(post).pluck('body').map(x => x.toUpperCase()).subscribe(x => console.log(x));
//merge

const merge1 = Rx.Observable.interval(2000).map(v => 'merge' + v);
const merge2 = Rx.Observable.interval(3000).map(v => 'merge' + v);
Rx.Observable.merge(merge1, merge2).take(10).subscribe(x => console.log(x));*/
//concat
const merge1 = Rx.Observable.range(1,8).map(v => 'merge' + v);
const merge2 = Rx.Observable.range(2,9).map(v => 'merge' + v);
Rx.Observable.concat(merge1, merge2).subscribe(x => console.log(x));