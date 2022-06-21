import React from 'react';
import APP_VERSION from '../../appVersion';
import Heart from '../../icons/Heart';

export default function Footer() {
    return (
        <footer className={'text-gray-400 text-center mt-auto pt-20 pb-6'}>
            <div>
                Made by Luan Rodrigues with
                <Heart className={'text-red-400 h-6 inline-block mx-1'} />
                and ReactJS
            </div>
            <div className={'text-sm mt-1'}>Version: {APP_VERSION}</div>
        </footer>
    );
}
