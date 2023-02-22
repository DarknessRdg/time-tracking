import React, { useState } from 'react';
import CardContainer from './CardContainer';
import constants from './constants';
import InfoBody from './InfoBody';
import EditBody from './EditBody';
import Register from '../../domain/HoursRegisters/Register';


export default function CardHour({ hour, onClose, onDelete, onEdit }) {
    const [isEdit, setEdit] = useState(false);

    function toggleEdit() {
        setEdit(!isEdit);
    }

    let period = constants.onGoingLabel;

    if (!hour.onGoing()) {
        period = `${constants.durationPrefix} ${hour.period()}`;
    }

    function onSaveEdit(start, end) {
        onEdit(new Register({ id: hour.id, start, end }));
        toggleEdit();
    }

    return <CardContainer label={period}>
        {
            !isEdit ?
                <InfoBody hour={hour} onDelete={onDelete} onClose={onClose} toggleEdit={toggleEdit} /> :
                <EditBody hour={hour} onCancel={toggleEdit} onSave={onSaveEdit}/>
        }
    </CardContainer>;
}
