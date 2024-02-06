import useCounter from "../hooks/useCounter";

const CounterHook = () => {
    const { counter, elementToAnimate, increment } = useCounter({
        maxCount: 15,
    });
    return (
        <>
            <h1>Counter Hook:</h1>
            <h2 ref={elementToAnimate}>{counter}</h2>

            <button onClick={increment}>+1</button>
        </>
    );
};

export default CounterHook;
