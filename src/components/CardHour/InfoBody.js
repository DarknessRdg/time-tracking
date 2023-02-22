import Trash from '../../icons/Trash';
import React from 'react';
import constants from './constants';
import Edit from '../../icons/Edit';

export default function InfoBody({ hour, onClose, onDelete, toggleEdit }) {
    const end = hour.onGoing() ? constants.onGoingLabel : hour.end().toString();

    return <>
        <div className='mb-5'>
            <p>Início: {hour.start().toString()}</p>
            <p>Fim: {end}</p>
        </div>

        <footer className={'flex justify-between'}>
            <button
                className={'py-2 px-4 bg-red-600 rounded-full text-blue-50'}
                onClick={onClose}
            >
                Encerrar
            </button>

            <div>
                <button type={'button'}
                        title={'Editar ponto'}
                        onClick={toggleEdit}
                        className={'text-gray-200 text-2xl'}>
                    <Edit />
                </button>
                <button
                    type={'button'}
                    title={'Deletar ponto'}
                    onClick={onDelete}
                    className={'text-red-500 text-2xl'}>
                    <Trash />
                </button>
            </div>
        </footer>
    </>;
}