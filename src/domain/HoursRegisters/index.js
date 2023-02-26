import Register from './Register';
import { v4 as uuidv4 } from 'uuid';

export default class HoursRegisters {
    constructor({ registers }) {
        this.registers = registers;
    }

    static fromJson(json) {
        const registers = json.registers.map((it) => Register.fromJson(it));

        return new HoursRegisters({ registers });
    }

    addNew() {
        const newRegister = new Register({ id: uuidv4() });

        this.all().push(newRegister);

        return newRegister;
    }

    all() {
        return this.registers;
    }

    delete(register) {
        this.registers = this.registers.filter((it) => it.id !== register.id);
    }

    updateById(updatedRegister) {
        const noFound = -1;
        const amountOfElementsToReplace = 1;

        const index = this.registers.findIndex(
            (it) => it.id === updatedRegister.id
        );
        if (index === noFound) return;

        this.registers.splice(
            index,
            amountOfElementsToReplace,
            updatedRegister
        );
    }

    static empty() {
        return new HoursRegisters({ registers: [] });
    }
}
