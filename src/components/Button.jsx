import React from 'react';

const Button = (prop) => {
    return (
        <div>
            <button className={`rounded-lg w-52 h-16 text-base font-bold text-white transition-all ${prop.bcolor} hover:${prop.hcolor}`}>
                Get Started
            </button>
        </div>
    );
}

export default Button;
