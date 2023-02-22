import React, { useState } from 'react';
import Check from '../../icons/Check';
import Close from '../../icons/Close';
import TimeInput from '../TimeInput';


function ActionButton({ className, children, onClick }) {
    return <button
        type={'button'}
        className={`${className} rounded-lg px-3 py-1 flex items-center gap-1 transition ease-in-out`}
        onClick={onClick}>
        {children}
    </button>;
}

export default function EditBody({ hour, onCancel, onSave }) {
    const [start, setStart] = useState(hour.start());
    const [end, setEnd] = useState(hour.end());

    function handleOnSaveClick(e) {
        e.preventDefault();
        onSave(start, end);
    }

    return <form>
        <div className='mb-5 flex flex-col gap-2'>
            <div>
                Início:
                <TimeInput
                    startHour={start.hours}
                    startMinute={start.minutes}
                    className={'ml-2'}
                    onChange={setStart} />
            </div>
            <div>
                Fim:
                <div className={'ml-2 inline-block'}>
                    {
                        hour.onGoing() ?
                            <>-----</> :
                            <TimeInput
                                startHour={end.hours}
                                startMinute={end.minutes}
                                className={'ml-2'}
                                onChange={setEnd} />}
                </div>
            </div>
        </div>
        <footer className={'flex gap-2'}>
            <ActionButton
                className={'text-green-400 hover:bg-green-900 hover:text-green-300 transition ease-in-out'}
                onClick={handleOnSaveClick}>
                <Check /> Salvar
            </ActionButton>
            <ActionButton
                className={'text-red-500 hover:bg-red-900 hover:text-red-300 transition ease-in-out'}
                onClick={onCancel}>
                <Close /> Cancelar
            </ActionButton>
        </footer>
    </form>;
}