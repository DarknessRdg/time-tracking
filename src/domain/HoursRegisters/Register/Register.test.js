import Register from '.';
import Hour from '../Hour';

describe('Test onGoing', () => {
    const now = new Date();

    it('should be on going if has no end time yet', () => {
        const register = new Register({
            id: 1,
            start: Hour.fromDate(now),
        });

        expect(register.onGoing()).toBeTruthy();
    });

    it('should not be on going if already has end time', () => {
        const register = new Register({
            id: 1,
            start: Hour.fromDate(now),
            end: Hour.fromDate(now),
        });

        expect(register.onGoing()).toBeFalsy();
    });
});

describe('Test start', () => {
    const hour = new Hour({ hours: 1, minutes: 1 });

    it('should be availabe to set initial start time throught constructor', () => {
        const register = new Register({ id: 1, start: hour });

        expect(register.start()).toBe(hour);
    });

    it('if no start time if given on constructor, Then set default hour as now', () => {
        const now = new Date();

        const register = new Register({ id: 1 });

        expect(register.start().hours).toBe(now.getHours());
    });
});

describe('Test end', () => {
    const hour = new Hour({ hours: 1, minutes: 1 });

    it('should be availabe to set initial end time throught constructor', () => {
        const register = new Register({ id: 1, end: hour });

        expect(register.end()).toBe(hour);
    });

    it('if no start time if given on constructor, Then set null as default value', () => {
        const register = new Register({ id: 1 });

        expect(register.end()).toBeNull();
    });
});

describe('Test period', () => {
    it('should return 0ed period if register is sill on going', () => {
        const register = new Register({ id: 1 });

        expect(register.onGoing()).toBeTruthy();

        const period = register.period();

        expect(period.hours).toBe(0);
        expect(period.minutes).toBe(0);
    });

    it('should return difference beteween start and end time', () => {
        const start = new Hour({ hours: 1, minutes: 0 });
        const end = new Hour({ hours: 2, minutes: 0 });

        const register = new Register({ id: 1, start, end });

        expect(register.onGoing()).toBeFalsy();

        const period = register.period();

        expect(period.hours).toBe(1);
        expect(period.minutes).toBe(0);
    });
});
