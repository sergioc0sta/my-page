import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../theme/theme';
import { HeaderProvider } from '../context/header';
import { Main } from '../components';
import { Header, Summary, Work, Social } from '../templates';
import '../theme/styles.css';

const IndexPage: React.FC = (): JSX.Element => {
    return (
        <ThemeProvider theme={theme}>
            <HeaderProvider>
                <React.Fragment>
                    <Header />
                    <Main>
                        <Summary />
                        <Work />
                        <Social />
                    </Main>
                </React.Fragment>
            </HeaderProvider>
        </ThemeProvider>
    );
};

export default IndexPage;

export const Head: HeadFC = (): JSX.Element => <title>sergioc0sta</title>;
