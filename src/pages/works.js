import React, { Component } from 'react';
import PortfolioFull from '../components/PortfolioFull'
import Scripts from '../components/Scripts';
import GetInTouch from '../components/GetInTouch'
export default class Works extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.querySelector("#home").classList.remove("active");
  }
    render() {
        return (
          <>
            <PortfolioFull/>
            <GetInTouch/>
            <Scripts/>
          </>
        );
    }
}
