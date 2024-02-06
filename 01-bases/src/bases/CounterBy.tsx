import { useState } from "react";

interface CounterProps {
    initialValue?: number;
}

interface CounterState {
    counter: number;
    clicks: number;
}

const CounterBy = ({ initialValue = 5 }: CounterProps) => {
    const [{ counter, clicks }, setCounterState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0,
    });

    const increment = (incrementNumber: number) => {
        setCounterState(({ clicks, counter }) => ({
            counter: counter + incrementNumber,
            clicks: clicks + 1,
        }));
    };

    return (
        <>
            <h1>Counter By: {counter} </h1>
            <h1>Clicks: {clicks} </h1>

            <button onClick={() => increment(1)}>+1</button>
            <button onClick={() => increment(5)}>+5</button>
        </>
    );
};

export default CounterBy;
