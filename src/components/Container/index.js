import React from 'react';

export default function Container({ children, className }) {
    return (
        <div className={'sm:container text-white ' + className}>{children}</div>
    );
}
