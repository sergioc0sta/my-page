import React from 'react';
import styled from '@emotion/styled';

type TranslationStyleTypes = {
    transform?: boolean;
};

const TranslationStyle = styled.div`
    background-size: contain;
    background-repeat: no-repeat;
    box-sizing: border-box;
    transform: ${(props: TranslationStyleTypes) => (props.transform ? `rotate(0deg)` : `rotate(180deg)`)};
`;

const Transaction = ({ start }: { start?: boolean }) => {
    return (
        <TranslationStyle transform={start}>
            <svg viewBox="0 0 1792 335" xmlns="http://www.w3.org/2000/svg">
                <path fill="#282a36" d="M 0 50 C 259 50 259 209 518 209 L 518 209 L 518 0 L 0 0 Z" stroke-width="0" />
                <path
                    fill="#282a36"
                    d="M 517 209 C 800 209 800 96 1083 96 L 1083 96 L 1083 0 L 517 0 Z"
                    stroke-width="0"
                />
                <path
                    fill="#282a36"
                    d="M 1082 96 C 1437 96 1437 189 1792 189 L 1792 189 L 1792 0 L 1082 0 Z"
                    stroke-width="0"
                />
            </svg>
        </TranslationStyle>
    );
};

export default Transaction;
