import optional from '../../utils/optional';
import HoursRegisters from '../HoursRegisters';

const DEFAULT_NAME = 'Colaborador';

export default class User {
    constructor({ name, hoursRegisters }) {
        this.name = optional.getOrElse(name, DEFAULT_NAME);
        this.hoursRegisters = optional.getOrElse(
            hoursRegisters,
            HoursRegisters.empty()
        );
    }

    clearRegisters() {
        this.hoursRegisters = HoursRegisters.empty();
    }
}
