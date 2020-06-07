import React, { Component } from 'react';
import HomeTitle from '../../CommonComponents/HomeTitle/HomeTitle'
import LinkButton from '../../CommonComponents/Button/Button'
import Icon from '../../CommonComponents/Icon/Icon'
import '../css/Home.scss'

class HomePage extends Component {
    render() {
        return (
            <div className="MainContainer">
                <HomeTitle  name={`Kwan Tak Hei`} preferred_name={` Fergus`}/>
                <Icon />
                <div className="NavButtonContainer">
                    <LinkButton label={'Education'} href='/info/education/'/>
                    <LinkButton label={'Experience'} href='/info/experience/'/>
                    <LinkButton label={'Recent Projects'} href='/info/recent-projects/'/>
                    <LinkButton label={'Resume'} href='/info/resume/'/>
                    <LinkButton label={'Tutorial'} href='/tutorial/'/>
                </div>
            </div>
            
        )
    }
}

export default HomePage;