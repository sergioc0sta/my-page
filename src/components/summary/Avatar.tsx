import * as React from 'react';
import styled from '@emotion/styled';
import { StaticImage } from "gatsby-plugin-image"

const Ola = styled.div`
    width: auto;
    margin: 1rem;
`;

const Avatar = () => {
    return (
        <Ola>
            <StaticImage src="../../images/sergioc0sta.png"  alt="Avtar"
                placeholder="blurred"
                layout="fixed"
                width={150}
                height={150}
                />
        </Ola>
    );
};

export default Avatar;
