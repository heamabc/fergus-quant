import React, { Component } from 'react';
import './css/AllPages.scss';
import Entry from '../CommonComponents/Entry/Entry';
import Title from '../CommonComponents/Title/Title'
import Page from '../CommonComponents/PageTemplate/PageTemplate'

class HomePage extends Component {
  render() {
    return (
      <Page>
        <Title style={{marginBottom: 60}} label={'Education'}/>
        <div className='EntryContainer'>
          <Entry date='September 2016 - December 2020'
                title='BSc in Quantitative Finance'
                location='The Chinese University of Hong Kong, Hong Kong'
          />   
          <Entry date='September 2011 - July 2016'
                title='HKDSE'
                details="5** in Mathematics, Economics, Mathematics Module 2, 5* in BAFS"
                location='Liu Po Shan Memorial College'
          />      
        </div>
      </Page>
      
    )
  }
}

export default HomePage;