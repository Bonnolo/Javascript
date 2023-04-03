class Clock {
  constructor() {
    this.currentDate = new Date();
    this.hours = this.currentDate.getHours();
    this.minutes = this.currentDate.getMinutes();
    this.seconds = this.currentDate.getSeconds();
    this.frequency = 1000;
  }
  start() {
    console.log("start");
    this.intervallID = setInterval(() => {
      this.update();
    }, this.frequency);
  }
  stop() {
    clearInterval(this.intervallID);
    console.log("stopped");
  }
  update() {
    console.log("before update", this);
    this.updateTime(1);
    console.log("after update", this);
  }
  updateTime(seconds) {
    this.seconds += seconds;
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minutes++;
    }
    if (this.minutes >= 60) {
      this.minutes = 0;
      this.hours++;
    }
    if (this.hours >= 24) {
      this.hours = 0;
    }
  }
  addSeconds(seconds) {}
}

let firstClock = new Clock();
firstClock.start();
setTimeout(() => {
  firstClock.stop();
}, 20000);
window.myClock = firstClock;
