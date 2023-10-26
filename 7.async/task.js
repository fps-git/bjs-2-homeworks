class AlarmClock {

    constructor() { 
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!!time && !!callback) {
            this.alarmCollection.push({callback:callback, time:time, canCall:true})
        } else {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (!!(this.alarmCollection.find((i) => i.time === time))) {
            console.warn('Уже присутствует звонок на это же время')
        }
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((i) => i.time != time)
    }

    getCurrentFormattedTime() {
        let date = new Date();
        return date.toLocaleTimeString().slice(0,5);
    }

    start() {
        if (!!this.intervalId) {
            return;
        } else {
            this.intervalId = setInterval (() => {
                this.alarmCollection.forEach( i => {
                    if (i.time === this.getCurrentFormattedTime() && i.canCall === true) {
                        i.canCall = false;
                        i.callback();
                    }
                });
            }, 1000)
        }
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(i => {
            i.canCall = true;
        })
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}