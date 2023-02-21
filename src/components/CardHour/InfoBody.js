import Trash from '../../icons/Trash';
import React from 'react';
import constants from './constants';

export default function InfoBody({ hour, onClose, onDelete }) {
    const end = hour.onGoing() ? constants.onGoingLabel : hour.end().toString();

    return <>
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
    </>;
}