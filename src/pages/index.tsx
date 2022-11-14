import type { HeadFC } from 'gatsby';
import { HeaderProvider } from '../context/header';
import { ThemeProvider } from '../context/theme';
import { Main } from '../components';
import Theme from '../theme/Theme';
import { Header, Summary, Work, Social, Seo, ThemeSelector } from '../templates';
import '../theme/styles.css';

const IndexPage: React.FC = (): JSX.Element => {
    return (
        <ThemeProvider>
            <Theme>
                <Main>
                    <HeaderProvider>
                        <Header />
                    </HeaderProvider>
                    <ThemeSelector />
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
