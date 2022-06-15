function getOrElse(value, elseValue) {
    if (value) return value;
    return elseValue;
}

export default {
    getOrElse,
};
