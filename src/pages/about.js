import React, { Component } from 'react'
import Scripts from '../components/Scripts'
import AboutUs from '../components/AboutUs'
import GetInTouch from '../components/GetInTouch'
import Pricing from '../components/Pricing'
export default class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.querySelector("#home").classList.remove("active");
    }
    render() {
        return (
            <>
                <AboutUs/>
                <Pricing/>
                <GetInTouch/>
                <Scripts/>
            </>
        )
    }
}
