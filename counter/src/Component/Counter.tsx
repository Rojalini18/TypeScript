import React, { useState } from 'react';
import Header from './Header';
import Button from './Button';

const Counter = () => {
    const [count, setCount] = useState(0)
    const handleClick = (value: number) => {
        setCount(count + value)
    }

    return (
        <div style={{ color: 'red' }}>
            <Header label={`${count}`} />
            <Button label="Add" handleClick={() => handleClick(1)} />
            <Button label="Reduce" handleClick={() => handleClick(-1)} />
        </div>
    )
}

export default Counter;

