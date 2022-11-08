import { useState, useMemo, useEffect } from 'react';

interface ScrollHandlerType {
    scrollHandler: number;
}

const useProgressBar = (): ScrollHandlerType => {
    const [progress, setProgress] = useState(0);

    const scrollCalc = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setProgress((winScroll / height) * 100);
    };

    const scrollHandler = useMemo((): number => {
        window.onscroll = (): void => {
            scrollCalc();
        };
        return progress;
    }, [progress]);

    useEffect(() => {
        return () => (window.onscroll = () => null);
    }, []);

    return { scrollHandler };
};

export default useProgressBar;
