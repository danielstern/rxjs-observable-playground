window.observer = {
    next: x=>console.log(x),
    error: e=>console.error(e),
    complete: ()=>console.info("Complete")
};

window.observable = new Rx.Observable(observer=>{
    observer.next(42);
    observer.complete();
});

window.subject = new Rx.Subject();

window.behaviorSubject = new Rx.BehaviorSubject(42);

window.replaySubject = new Rx.ReplaySubject(3);
window.replaySubject.next("Lannister");
window.replaySubject.next("Targaryen");

window.interval = Rx.Observable.interval;