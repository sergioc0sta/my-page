import { createContext } from 'react';

interface ScrollHandlerType {
    scrollHandler: number;
}

const HeaderContext = createContext<ScrollHandlerType >({ scrollHandler: 0 });

export { HeaderContext  };
