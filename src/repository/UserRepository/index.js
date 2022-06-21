import HoursRegisters from '../../domain/HoursRegisters';
import User from '../../domain/User';

const HOURS_REGISTERED_KEY = 'hours';
const USER_NAME_KEY = 'username';

function getUserName() {
    return localStorage.getItem(USER_NAME_KEY);
}

function setUserName(name) {
    localStorage.setItem(USER_NAME_KEY, name);
}

function getHours() {
    const json = JSON.parse(localStorage.getItem(HOURS_REGISTERED_KEY));

    if (!json) return null;
    return HoursRegisters.fromJson(json);
}

function setHours(hours) {
    localStorage.setItem(HOURS_REGISTERED_KEY, JSON.stringify(hours));
}

export default class UserRepository {
    getUserData() {
        const name = getUserName();
        const hoursRegisters = getHours();

        return new User({ name, hoursRegisters });
    }

    save(user) {
        setUserName(user.name);
        setHours(user.hoursRegisters);
    }

    clearHistory() {
        localStorage.setItem(HOURS_REGISTERED_KEY, null);
    }
}
