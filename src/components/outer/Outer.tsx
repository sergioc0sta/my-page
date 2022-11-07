import styled from "@emotion/styled";

const Outer = styled.div`
    border-left: 3px dashed ${props => props.theme.colors.purple};
    display: flex;
    flex-direction: column;
`

export default Outer;