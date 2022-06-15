export default class Hour {
    constructor({ hours, minutes }) {
        this.hours = hours;
        this.minutes = minutes;
    }

    static fromJson(json) {
        return new Hour({ ...json });
    }

    hoursBetween(other) {
        const hours = Math.abs(this.hours - other.hours);
        const minutes = Math.abs(this.minutes - other.minutes);

        return new Hour({ hours, minutes });
    }

    plus(other) {
        const hours = this.hours + other.hours;
        const minutes = this.minutes + other.minutes;

        return new Hour({ hours, minutes });
    }

    toString() {
        return `${this.hours}:${this.minutes}`;
    }

    static fromDate(date) {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return new Hour({ hours, minutes });
    }
}
