import Text from '../text';
import styled from '@emotion/styled';

const DateStyle = styled(Text)`
    text-align: right;
    color: ${(props) => props.theme.colors.primary};
    font-style: italic;
    font-size: 14px;
`;

type DateType = {
    dateRange: string;
};

const Date = ({ dateRange }: DateType): JSX.Element => {
    return <DateStyle>{dateRange}</DateStyle>;
};

export default Date;
