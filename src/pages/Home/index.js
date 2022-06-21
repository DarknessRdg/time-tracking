import React, { useState, useEffect } from 'react';
import CardHour from '../../components/CardHour';
import Container from '../../components/Container';
import CounterService from '../../services/CounterService';
import Refresh from '../../icons/Refresh';
import Trash from '../../icons/Trash';

const service = new CounterService();

export default function Home() {
    const [registers, setRegisters] = useState([
        ...service.getUser().hoursRegisters.all(),
    ]);

    console.log(service);
    const [totalHoursWorked, setTotalHoursWorked] = useState('0:0');

    function addHour(e) {
        e.preventDefault();

        service.addHour();
        updateStateUserRegisters();
    }

    function closeHour(e, hour) {
        e.preventDefault();

        service.closeHour(hour);
        updateStateUserRegisters();
    }

    function updateTotalHours() {
        setTotalHoursWorked(service.sumTotalUserHours().toString());
    }

    function clearHistory(e) {
        e.preventDefault();

        service.clearHistory();
        updateStateUserRegisters();
    }

    function updateStateUserRegisters() {
        setRegisters([...service.getUser().hoursRegisters.all()]);
    }

    useEffect(updateTotalHours, [registers]);

    return (
        <Container className="text-center py-10">
            <h1 className="text-2xl">Olá, {service.getUser().name}</h1>
            <div className={'m-10'}>
                <p>
                    Total de horas trabalhadas: {totalHoursWorked}
                    <Refresh
                        className={
                            'text-purple w-8 inline-block ml-4 cursor-pointer'
                        }
                        onClick={updateTotalHours}
                    />
                </p>
                <span></span>
            </div>
            <div className={'mt-16'}>
                {registers.map((it) => (
                    <CardHour
                        key={it.id}
                        hour={it}
                        onClose={(e) => closeHour(e, it)}
                    />
                ))}
            </div>
            <button
                className={'rounded-full bg-blue-600 py-2 px-4 text-blue-50'}
                onClick={addHour}
                type={'button'}
            >
                Adicionar ponto
            </button>
            <button
                className={
                    'rounded-full bg-red-600 py-2 px-4 text-blue-50 ml-4'
                }
                onClick={clearHistory}
                type={'button'}
            >
                <Trash className={'mr-2'} /> Limpar histórico de pontos
            </button>
        </Container>
    );
}
