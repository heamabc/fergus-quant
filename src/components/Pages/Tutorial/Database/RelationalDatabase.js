import React, { Component } from 'react';
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../../CommonComponents/Title/Title'
import '../../css/AllPages.scss';

import Table1 from '../../../Table/Table1'

class HomePage extends Component {
    render() {
        return (
            <Page>
                <Title label="Terminology" />
                <ul>
                    <li><strong>Relational Model</strong>: Represents data in the form of relations or tables.</li>
                    <li><strong>Relational Schema</strong>: Represents structure of the relation. 
                        eg. STOCK_PRICE (HIGH, LOW, OPEN, CLOSE)</li>
                    <li><strong>Attribute</strong>: the relation, basically mean column.</li>
                    <li><strong>Tuple</strong>: row of a relation.</li>
                    <li><strong>Relation Instance</strong>: A set of tuple.</li>
                    <li><strong>Domain</strong>: Constrains applied to attribute. eg. AGE > 0</li>
                </ul>

                <Title label="Primary Key vs Foreign Key" />
                <PassageTitle label="Primary Key" />
                <p>
                    Primary key is a unique identifier in each row of a table. The key should be unique for all row and cant 
                    have NULL value.
                </p>
                <PassageTitle label="Foreign Key" />
                <p>
                    Foreign key is a column that reference a column of another table. It provides a link between two tables.
                </p>
                <PassageTitle label="Difference between primary key and foreign key" />
                <Table1 />
                <Title label="Why database is faster than excel/csv?" />
                <PassageTitle label="Indexing" />
                <p>
                    As metioned before, the index of each row of data is unique, database can quickly locate data with index
                    without searching through the data. Database will create the index using the key from the table. Database will
                    then assign the pointer of the address of the corresponding data to each of the key. Therefore, when we want to
                    access a specific data with its key, database can retrieve the pointer and thus the data.
                </p>
                <PassageTitle label="Caching" />
                <p>
                    Database will store frequently-queried data in the cache. Cache is a very fast component that store data. Data inside
                    of cache can be retrieved and stored very rapidly. The caching of database system is very well written and thus will can
                    optimize the speed of query. 
                </p>
            </Page>
        )}}

export default HomePage