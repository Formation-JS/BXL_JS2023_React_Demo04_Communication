import { useState } from 'react';
import CounterButton from '../../components/counter-bouton/counter-bouton.jsx';
import CounterDisplay from '../../components/counter-display/counter-display.jsx';
import CounterReset from '../../components/counter-reset/counter-reset.jsx';

const INITIAL_COUNT = 0;

const Counter = () => {

    const [count, setCount] = useState(INITIAL_COUNT);

    const handleAction = (operation, step) => {
        if(operation === 'incr') {
            setCount(count => count + step);
        }
        else {
            setCount(count => count - step);
        }
    }

    const handleReset = () => {
        setCount(INITIAL_COUNT);
    }

    return (
        <>
            <h2>Compteur</h2>
            <CounterDisplay count={count} />
            <CounterButton onAction={handleAction} />
            <CounterButton onAction={handleAction} step={5} />
            <CounterReset 
                isActive={count !== INITIAL_COUNT}
                onReset={handleReset}/>
        </>
    )
}

export default Counter;