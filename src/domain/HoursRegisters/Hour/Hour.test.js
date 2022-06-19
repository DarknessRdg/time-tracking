import Hour from '.';

describe('Test toString', () => {
    it('should add left zeros if hous are lower then 10', () => {
        const hour = new Hour({ hours: 2, minutes: 11 });

        expect(hour.toString()).toBe('02:11');
    });

    it('should add left zeros if minutes are lower then 10', () => {
        const hour = new Hour({ hours: 21, minutes: 5 });

        expect(hour.toString()).toBe('21:05');
    });
});

describe('Test plus (+)', () => {
    it('should increment 1 hour if minutes sum is equal to 60', () => {
        const fiftyFiveMinutes = new Hour({ hours: 0, minutes: 59 });
        const oneMinute = new Hour({ hours: 0, minutes: 1 });

        const plusHours = fiftyFiveMinutes.plus(oneMinute);

        expect(plusHours.minutes).toBe(0);
        expect(plusHours.hours).toBe(1);
    });

    it('should increment 1 hour if minutes sum is over to 60 and remain ther over minutes', () => {
        const fiftyFiveMinutes = new Hour({ hours: 0, minutes: 59 });
        const oneMinute = new Hour({ hours: 0, minutes: 2 });

        const plusHours = fiftyFiveMinutes.plus(oneMinute);

        expect(plusHours.minutes).toBe(1);
        expect(plusHours.hours).toBe(1);
    });
});

describe('Test hours beteween (-)', () => {
    it('should return the difference betweeen hours', () => {
        const shortestTime = new Hour({ hours: 5, minutes: 10 });
        const biggestTime = new Hour({ hours: 15, minutes: 20 });

        const between = shortestTime.hoursBetween(biggestTime);

        expect(between.hours).toBe(10);
        expect(between.minutes).toBe(10);
    });

    it('should always return positive numbers, even if its (A - B) or (B - A)', () => {
        const a = new Hour({ hours: 5, minutes: 10 });
        const b = new Hour({ hours: 15, minutes: 20 });

        const aDiffB = a.hoursBetween(b);
        const bDiffA = b.hoursBetween(a);

        expect(aDiffB.hours).toBe(10);
        expect(aDiffB.minutes).toBe(10);

        expect(aDiffB).toMatchObject(bDiffA);
    });
});

describe('Test fromDate', () => {
    it('should return an instance with right hours and minutes extracted from Date object', () => {
        const hours = 20;
        const minutes = 32;

        const date = new Date(2000, 9, 26, hours, minutes, 10);

        const hourObject = Hour.fromDate(date);

        expect(hourObject.minutes).toBe(minutes);
        expect(hourObject.hours).toBe(hours);
    });
});
