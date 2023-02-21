import React from 'react';
import CardContainer from './CardContainer';
import constants from './constants';
import InfoBody from './InfoBody';


export default function CardHour({ hour, onClose, onDelete }) {
    let period = constants.onGoingLabel;

    if (!hour.onGoing()) {
        period = `${constants.durationPrefix} ${hour.period()}`;
    }

    return <CardContainer label={period}>
        <InfoBody hour={hour} onDelete={onDelete} onClose={onClose} />
    </CardContainer>;
}
