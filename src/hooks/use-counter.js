import { useEffect, useState } from "react";

const useCounter = (counterValue, counterFn) => {
    const [counter, setCounter] = useState(counterValue);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counterFn)
        }, 1000);
        return () => clearInterval(interval)
    }, [counterFn])

    return counter;
}

export default useCounter;