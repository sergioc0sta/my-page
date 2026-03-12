import React from 'react';
import type { HeadFC } from 'gatsby';
import { ThemeProvider } from '../context/theme';
import { Main } from '../components';
import Theme from '../theme/Theme';
import { Summary, Work, Social, Seo, ThemeSelector, SectionIndicator } from '../templates';
import '../theme/styles.css';

const IndexPage: React.FC = (): JSX.Element => {
    return (
        <ThemeProvider>
            <Theme>
                <Main>
                    <ThemeSelector />
                    <SectionIndicator />
                    <Summary />
                    <Work />
                    <Social />
                </Main>
            </Theme>
        </ThemeProvider>
    );
};

export default IndexPage;

export const Head: HeadFC = (): JSX.Element => <Seo />;
