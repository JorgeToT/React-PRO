import { useReducer } from "react";

interface IState {
    counter: number;
    previous: number;
    changes: number;
}

const INITIAL_STATE: IState = {
    counter: 0,
    previous: 0,
    changes: 0,
};

type CounterAction =
    | { type: "increaseBy"; payload: { value: number } }
    | { type: "reset" };

const counterReducer = (state: IState, action: CounterAction): IState => {
    switch (action.type) {
        case "increaseBy":
            return {
                counter: state.counter + action.payload.value,
                previous: state.counter,
                changes: state.changes + 1,
            };
        case "reset":
            return INITIAL_STATE;
        default:
            return state;
    }
};

const CounterReducerComponent = () => {
    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleReset = () => {
        dispatch({ type: "reset" });
    };

    const handleIncreaseBy = (value: number) => {
        dispatch({ type: "increaseBy", payload: { value } });
    };

    return (
        <>
            <h1>Counter Reducer</h1>
            <pre>{JSON.stringify(counterState, null, 2)}</pre>

            <button onClick={() => handleIncreaseBy(1)}>+1</button>
            <button onClick={() => handleIncreaseBy(5)}>+5</button>
            <button onClick={() => handleIncreaseBy(10)}>+10</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
};

export default CounterReducerComponent;
