import Optional from 'optional-js';
import Hour from '../Hour';

export default class Register {
    constructor({ id, start = undefined, end = undefined }) {
        this.id = id;
        this._start = Optional.ofNullable(start).orElseGet(Hour.now);
        this._end = Optional.ofNullable(end).orElse(null);
    }

    static fromJson(json) {
        const reg = new Register({
            id: json.id,
        });

        reg._start = Hour.fromJson(json._start);
        reg._end = optional.mapOrElse(json._end, null, (end) =>
            Hour.fromJson(end)
        );
        return reg;
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
        const end = Optional.ofNullable(this.end()).orElseGet(() =>
            Hour.fromDate(new Date())
        );

        return this.start().hoursBetween(end);
    }

    close() {
        this._end = Hour.fromDate(new Date());
    }
}
