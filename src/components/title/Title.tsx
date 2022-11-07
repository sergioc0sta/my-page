import styled from '@emotion/styled';

const Title = styled.h1`
    font-size: 30px;
    font-family: ${(props) => props.theme.fonts.title};
    color: ${(props) => props.theme.colors.orange};
    font-weight: bold;
`;


const TitleTimeLine = styled(Title)`
    margin: 5px 0 25px 5px;
    position: relative;
    :before {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        background: ${(props) => props.theme.colors.purple};
        border-radius: 360px;
        left: -46px;
        top: 10px;
        border: 3px solid ${(props) => props.theme.colors.purple};
      }

`
export {Title, TitleTimeLine};
