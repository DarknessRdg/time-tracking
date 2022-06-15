import Register from './Register';

export default class HoursRegisters {
    constructor({ registers }) {
        this.registers = registers;
    }

    static fromJson(json) {
        const registers = json.registers.map((it) => Register.fromJson(it));

        return new HoursRegisters({ registers });
    }

    addNew() {
        const all = this.all();
        const newId = all.length;

        const newRegister = new Register({ id: newId });

        all.push(newRegister);

        return newRegister;
    }

    all() {
        return this.registers;
    }

    static empty() {
        return new HoursRegisters({ registers: [] });
    }
}
