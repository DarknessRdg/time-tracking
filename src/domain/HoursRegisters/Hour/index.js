const ONE_HOURS_IN_MINUTES = 60;

export default class Hour {
    constructor({ hours, minutes }) {
        this.hours = hours;
        this.minutes = minutes;
    }

    static now() {
        return Hour.fromDate(new Date());
    }

    static fromJson(json) {
        return new Hour({ ...json });
    }

    static fromDate(date) {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return new Hour({ hours, minutes });
    }

    static fromMinutes({ allMinutes }) {
        const hours = parseInt(allMinutes / ONE_HOURS_IN_MINUTES);
        const minutes = allMinutes % ONE_HOURS_IN_MINUTES;

        return new Hour({ hours, minutes });
    }

    getSumOfMinutes() {
        const hoursInMinutes = this.hours * ONE_HOURS_IN_MINUTES;
        return this.minutes + hoursInMinutes;
    }

    hoursBetween(other) {
        const diff = Math.abs(this.getSumOfMinutes() - other.getSumOfMinutes());

        return Hour.fromMinutes({ allMinutes: diff });
    }

    plus(other) {
        const allMinutes = this.getSumOfMinutes() + other.getSumOfMinutes();
        return Hour.fromMinutes({ allMinutes });
    }

    toString() {
        const hours = withTrealingZeros(this.hours, 2);
        const minutes = withTrealingZeros(this.minutes, 2);

        return `${hours}:${minutes}`;
    }
}

function withTrealingZeros(number, size) {
    var string = String(number);
    while (string.length < (size || 2)) {
        string = '0' + string;
    }
    return string;
}
