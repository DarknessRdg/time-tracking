function getOrElse(value, elseValue) {
    if (value) return value;
    return elseValue;
}

function mapOrElse(value, elseValue, converterFunction) {
    if (value) {
        return converterFunction(value);
    }
    return elseValue;
}

const optional = {
    getOrElse,
    mapOrElse,
};

export default optional;
