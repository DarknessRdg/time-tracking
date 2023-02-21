import React from 'react';
import Trash from '../../icons/Trash';
import CardContainer from './CardContainer';

const ON_GOING_LABEL = 'Em andamento...';

export default function CardHour({ hour, onClose, onDelete }) {
    let end = ON_GOING_LABEL;
    let period = ON_GOING_LABEL;

    if (!hour.onGoing()) {
        end = hour.end().toString();
        period = 'Duração: ' + hour.period().toString();
    }

    return <CardContainer label={period}>
        <div className='mb-5'>
            <p>Início: {hour.start().toString()}</p>
            <p>Fim: {end}</p>
        </div>

        <button
            className={'py-2 px-4 bg-red-600 rounded-full text-blue-50'}
            onClick={onClose}
        >
            Encerrar
        </button>

        <button
            type={'button'}
            title={'Deletar ponto'}
            onClick={onDelete}
            className={'float-right text-red-500 text-2xl'}
        >
            <Trash />
        </button>
    </CardContainer>;
}
