import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const MAXIMUN_COUNT = 10;

const CounterEffect = () => {
    const [counter, setCounter] = useState(5);
    const counterElement = useRef<HTMLHeadingElement>(null);

    const increment = () => {
        setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
    };

    useEffect(() => {
        if (counter < 10) return;

        console.log(
            "%cSe llegó al valor máximo",
            "color: red; font-size: 1.5rem; background-color: black;"
        );

        const timeline = gsap.timeline();

        timeline
            .to(counterElement.current, {
                y: -10,
                duration: 0.1,
                ease: "elastic.out",
            })
            .to(counterElement.current, {
                y: 0,
                duration: 1,
                ease: "bounce.out",
            });
    }, [counter]);

    return (
        <>
            <h1>Counter Effect:</h1>
            <h2 ref={counterElement}>{counter}</h2>

            <button onClick={increment}>+1</button>
        </>
    );
};

export default CounterEffect;
