import { Helmet } from 'react-helmet';
import { useMetaData } from '../hooks';

const Seo = (): JSX.Element => {
    const { lang, title, description, siteUrl } = useMetaData();

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={title}
        >
            <meta name="description" content={description} />
            <link rel="canonical" href={siteUrl} />
        </Helmet>
    );
};

export default Seo;
