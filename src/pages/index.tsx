import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../theme/theme';
import './styles.tsx';

import { Header, Main, Summary, Work, Social } from '../components';

const IndexPage: React.FC = (): JSX.Element => {
    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <Header />
                <Main>
                    <Summary />
                    <Work />
                    <Social />
                </Main>
            </React.Fragment>
        </ThemeProvider>
    );
};

export default IndexPage;

export const Head: HeadFC = (): JSX.Element => <title>sergioc0sta</title>;
