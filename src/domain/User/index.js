import Optional from 'optional-js';
import HoursRegisters from '../HoursRegisters';

const DEFAULT_NAME = 'Colaborador';

export default class User {
    constructor({ name, hoursRegisters }) {
        this.name = Optional.ofNullable(name).orElse(DEFAULT_NAME);
        this.hoursRegisters = Optional.ofNullable(hoursRegisters).orElseGet(
            HoursRegisters.empty
        );
    }

    clearRegisters() {
        this.hoursRegisters = HoursRegisters.empty();
    }
}
