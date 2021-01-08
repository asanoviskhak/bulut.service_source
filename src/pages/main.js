import React, { Component } from 'react'
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import Quotes from '../components/Quotes';
import Parallax from '../components/Parallax';
import Scripts from '../components/Scripts';
import GetInTouch from '../components/GetInTouch';
export default class Main extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
        document.querySelector("#home").classList.add("active");
    }
    render() {
        return (
            <>
                <Parallax/>
                <Quotes/>
                <Process/>
                <Portfolio/>
                <Pricing/>
                <GetInTouch/>
                <Scripts/>
            </>
        )
    }
}
