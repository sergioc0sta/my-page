import { useState, useMemo } from 'react';

const useProgressBar = () => {
    const [progress, setProgress] = useState(0);

    const scrollCalc = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setProgress((winScroll / height) * 100);
    };

    const scrollHandler = useMemo(() => {
        window.onscroll = () => {
            scrollCalc();
        };
        return progress;
    }, [progress]);

    return { scrollHandler };
};

export { useProgressBar };
