import * as React from 'react';
import Layout from '../components/layout';
import './styles';

import Summary from '../components/summary';
import Work from '../components/work';
import Transaction from '../components/transaction/Transaction';

const IndexPage = () => (
    <Layout>
        <Summary />
        <Transaction start />
        <Transaction />
        <Work />
    </Layout>
);

export default IndexPage;
