import Hour from './Hour';

export default class Register {
    constructor({ id }) {
        this.id = id;
        this._start = Hour.fromDate(new Date());
        this._end = null;
    }

    onGoing() {
        return !Boolean(this.end());
    }

    start() {
        return this._start;
    }

    end() {
        return this._end;
    }

    period() {
        const defaultPeriod = new Hour({ hours: 0, minutes: 0 });

        if (this.onGoing()) return defaultPeriod;
        return this.start().hoursBetween(this.end());
    }

    close() {
        this._end = Hour.fromDate(new Date());
    }
}
