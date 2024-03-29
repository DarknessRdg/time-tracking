import UserRepository from '../../repository/UserRepository';
import Hour from '../../domain/HoursRegisters/Hour';
import Optional from 'optional-js';

export default class CounterService {
    constructor() {
        this.repo = new UserRepository();
        this._user = null;
    }

    getUser() {
        this._user = Optional.ofNullable(this._user).orElseGet(
            this.repo.getUserData
        );
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

    updateRegisterById(updatedRegister) {
        this.getUser().hoursRegisters.updateById(updatedRegister);
        this.save();
    }
}
