function getOrElse(value, elseValue) {
    if (value) return value;
    return elseValue;
}

const optional = {
    getOrElse,
};

export default optional;
