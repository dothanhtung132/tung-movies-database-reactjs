import { useEffect, useRef } from "react";

export const useDebounce = function (func, delay) {
    const argsRef = useRef();
    const timeout = useRef();

    function cleanup() {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
    }

    useEffect(() => cleanup, []);

    return function debouncedFunc(...args) {
        argsRef.current = args;
        cleanup();
        timeout.current = setTimeout(() => {
            if (argsRef.current) {
                func(...argsRef.current);
            }
        }, delay);
    };
}
