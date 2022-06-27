import React from 'react';
import Trash from '../../icons/Trash';

const ON_GOING_LABEL = 'Em andamento...';

export default function CardHour({ hour, onClose, onDelete }) {
    let end = ON_GOING_LABEL;
    let period = ON_GOING_LABEL;

    if (!hour.onGoing()) {
        end = hour.end().toString();
        period = 'Duração: ' + hour.period().toString();
    }

    return (
        <div>
            <section
                className={
                    'rounded-md border-purple bg-darkModeElevated border-2 inline-block pt-16 pb-10 px-10 min-w-[90vw] sm:min-w-[45vw] md:min-w-[40vw] lg:min-w-[35vw] text-left mb-10 relative'
                }
            >
                <span
                    className={
                        'absolute -top-7 bg-purple rounded-full p-3 left-10 right-10 text-center'
                    }
                >
                    {period}
                </span>

                <div className="mb-5">
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
            </section>
        </div>
    );
}
