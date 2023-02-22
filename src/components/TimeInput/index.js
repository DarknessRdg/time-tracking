import React, { useEffect, useState } from 'react';
import Hour from '../../domain/HoursRegisters/Hour';


function NumberInput({ value, min, max, onChange }) {
    return <input
        type={'number'}
        max={max}
        min={min}
        value={value}
        onChange={onChange}
        required
        className={'bg-neutral-900 border-solid border-2 border-neutral-600 py-2 px-4 rounded-md'} />;
}

export default function TimeInput({ startHour, startMinute, className, onChange }) {
    const [hours, setHours] = useState(startHour);
    const [minutes, setMinutes] = useState(startMinute);

    useEffect(function updateParent() {
        onChange(new Hour({ hours, minutes }));
    }, [hours, minutes, onChange]);

    function onChangeHours(e) {
        setHours(parseInt(e.target.value));
    }

    function onChangeMinutes(e) {
        setMinutes(parseInt(e.target.value));
    }

    return (
        <span className={className}>
            <NumberInput value={hours} min={0} max={24} onChange={onChangeHours} />
            <span className={'mx-2'}>:</span>
            <NumberInput value={minutes} min={0} max={59} onChange={onChangeMinutes} />
        </span>
    );
}