import React from 'react';
import { Container, Link } from '../components';
import { useSocialData } from '../hooks';

type SocialKey = 'email' | 'linkedin' | 'github';

interface SocialItem {
    key: SocialKey;
    label: string;
    href: string;
}

const Social = (): JSX.Element => {
    const data = useSocialData();
    const selected = data.reduce<Partial<Record<SocialKey, SocialItem>>>((acc, item) => {
        const title = item.node.title.toLowerCase();
        const description = item.node.description;

        if (!acc.email && (title.includes('email') || description.includes('@'))) {
            acc.email = { key: 'email', label: 'Email', href: `mailto:${description}` };
        }

        if (!acc.linkedin && (title.includes('linkdin') || title.includes('linkedin') || description.includes('linkedin.com'))) {
            acc.linkedin = { key: 'linkedin', label: 'LinkedIn', href: description };
        }

        if (!acc.github && (title.includes('github') || description.includes('github.com'))) {
            acc.github = { key: 'github', label: 'GitHub', href: description };
        }

        return acc;
    }, {});

    const socials: SocialItem[] = [selected.email, selected.linkedin, selected.github].filter(
        (item): item is SocialItem => Boolean(item),
    );

    const iconByKey: Record<SocialKey, JSX.Element> = {
        email: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
                <path
                    fill="currentColor"
                    d="M20 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 2v.5l-8 5-8-5V7h16ZM4 17V9.8l7.47 4.67a1 1 0 0 0 1.06 0L20 9.8V17H4Z"
                />
            </svg>
        ),
        linkedin: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
                <path
                    fill="currentColor"
                    d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12ZM5.5 18.5h2.9v-8.7H5.5v8.7Zm4.6 0H13v-4.2c0-1.1.2-2.2 1.57-2.2 1.35 0 1.37 1.27 1.37 2.28v4.12h2.9v-4.7c0-2.3-.5-4.07-3.2-4.07-1.3 0-2.17.7-2.53 1.38h-.04V9.8h-2.77v8.7Z"
                />
            </svg>
        ),
        github: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
                <path
                    fill="currentColor"
                    d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.35-1.75-1.35-1.75-1.1-.75.09-.73.09-.73 1.22.09 1.86 1.23 1.86 1.23 1.08 1.84 2.84 1.31 3.53 1 .1-.77.43-1.31.78-1.61-2.67-.3-5.46-1.32-5.46-5.87 0-1.3.47-2.36 1.23-3.2-.12-.3-.53-1.52.12-3.16 0 0 1-.32 3.3 1.22a11.45 11.45 0 0 1 6 0c2.3-1.54 3.3-1.22 3.3-1.22.65 1.64.24 2.86.12 3.16.77.84 1.23 1.9 1.23 3.2 0 4.57-2.8 5.56-5.47 5.85.44.37.82 1.1.82 2.22v3.3c0 .33.22.7.83.58A12 12 0 0 0 12 .5Z"
                />
            </svg>
        ),
    };

    return (
        <Container id="social">
            <div className="mx-auto flex w-full max-w-3xl justify-center">
                <ul className="m-0 flex list-none flex-wrap items-center justify-center gap-8 p-0">
                    {socials.map((item) => (
                        <li key={item.key}>
                            <Link
                                href={item.href}
                                target={item.key === 'email' ? undefined : '_blank'}
                                rel={item.key === 'email' ? undefined : 'noreferrer'}
                                className="inline-flex items-center gap-3 no-underline"
                            >
                                <span className="text-slate-700 transition-colors duration-500 dark:text-slate-200">
                                    {iconByKey[item.key]}
                                </span>
                                <span className="text-xl font-semibold sm:text-2xl">{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    );
};

export default Social;
