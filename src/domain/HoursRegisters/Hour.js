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
        const hours = withTrealingZeros(this.hours, 2);
        const minutes = withTrealingZeros(this.minutes, 2);

        return `${hours}:${minutes}`;
    }

    static fromDate(date) {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return new Hour({ hours, minutes });
    }
}

function withTrealingZeros(number, size) {
    var string = String(number);
    while (string.length < (size || 2)) {
        string = '0' + string;
    }
    return string;
}
