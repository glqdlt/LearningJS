const EventEmitter = require('events').EventEmitter;

class countdown extends EventEmitter {

    constructor(sec, supers) {
        super();
        this.seconds = sec;
        this.supersittious = !!supers;
    }

    go() {
        const countdown = this;
        return new Promise(function (resolve, reject) {

            for (let i = countdown.seconds; i >= 0; i--) {
                setTimeout(function () {
                    if (countdown.supersittious && i === 13) {
                        return reject(new Error("oh my goodddd"));
                    }
                    countdown.emit("tick", i);
                    if (i === 0) resolve();
                }, (countdown.seconds - i) * 1000);
            }
        });
    };
};


const c = new countdown(15,true);
c.on('tick',function(i){
    if(i>0) console.log(i + '...');
});
c.go()
    .then(function(){
        console.log("go!");
    })
    .catch(function(err){
        console.error(err.message);
    });


