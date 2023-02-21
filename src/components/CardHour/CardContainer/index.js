import React from 'react';

export default function CardContainer({ label, children }) {
    return <section
        className='rounded-md border-purple bg-darkModeElevated border-2 inline-block pt-16 pb-10 px-10 min-w-[90vw] sm:min-w-[45vw] md:min-w-[40vw] lg:min-w-[35vw] text-left mb-10 relative'>
                <span className='absolute -top-7 bg-purple rounded-full p-3 left-10 right-10 text-center'>
                    {label}
                </span>

        {children}
    </section>;
}