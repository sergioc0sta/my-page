import React from 'react';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';

const AvatarLayout = styled.div`
    height: 90%;
    width: 50%;
    display: flex;
    justify-content: flex-end;
`;

const Avatar = () => {
    return (
        <AvatarLayout>
            <StaticImage
                src="../../images/astronaut.png"
                width={300}
                quality={95}
                formats={['auto', 'webp', 'avif']}
                alt="A Gatsby astronaut"
            />
        </AvatarLayout>
    );
};

export default Avatar;
