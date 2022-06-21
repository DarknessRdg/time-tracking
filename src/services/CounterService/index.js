import UserRepository from '../../repository/UserRepository';
import Hour from '../../domain/HoursRegisters/Hour';
import optional from '../../utils/optional';

export default class CounterService {
    constructor() {
        this.repo = new UserRepository();
        this._user = null;
    }

    getUser() {
        this._user = optional.getOrElse(this._user, this.repo.getUserData());
        return this._user;
    }

    addHour() {
        this.getUser().hoursRegisters.addNew();
        this.save();
    }

    closeHour(hour) {
        hour.close();
        this.save();
    }

    sumTotalUserHours() {
        const defaultSum = new Hour({ hours: 0, minutes: 0 });

        const registers = this.getUser().hoursRegisters.all();
        return registers.reduce((acc, it) => {
            return acc.plus(it.period());
        }, defaultSum);
    }

    deleteRegister(register) {
        this.getUser().hoursRegisters.delete(register);
        this.save();
    }

    save() {
        this.repo.save(this.getUser());
    }

    clearHistory() {
        this.repo.clearHistory();
        this.getUser().clearRegisters();
    }
}
