import React, { Component } from 'react';
import '../css/AllPages.scss';
import {EntryWithLink} from '../../CommonComponents/Entry/Entry';
import Title from '../../CommonComponents/Title/Title'
import Page from '../../CommonComponents/PageTemplate/PageTemplate'

class HomePage extends Component {
  render() {
const lpsmc_description = `HKDSE best 5 subjects 31/35
5** : Mathematics, Economics, Mathematics
5* : BAFS
`
    return (
      <Page>
        <Title style={{marginBottom: 60}} label={'Education'}/>
        <div className='EntryContainer'>
          <EntryWithLink 
                href='https://www.cuhk.edu.hk/'
                date='September 2016 - December 2020'
                title='BSc in Quantitative Finance'
                location='The Chinese University of Hong Kong, Hong Kong'
          />   
          <EntryWithLink 
                href='http://www.lpsmc.edu.hk/'
                date='September 2011 - July 2016'
                title='HKDSE'
                location='Liu Po Shan Memorial College'
                description={lpsmc_description}
          />      
        </div>
      </Page>
      
    )
  }
}

export default HomePage;