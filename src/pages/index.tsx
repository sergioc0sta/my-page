import * as React from 'react';
import type { HeadFC } from 'gatsby';
import './styles.tsx';

import { Header, Main, Summary, Work, Social } from '../components';

const IndexPage = () => {
    return (
        <div>
            <Header />
            <Main>
                <Summary />
                <Work />
                <Social />
            </Main>
        </div>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>sergioc0sta</title>;
