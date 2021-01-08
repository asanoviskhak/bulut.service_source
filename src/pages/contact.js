import React, { Component } from 'react'
import Contacts from '../components/Contacts'
import Scripts from '../components/Scripts'
export default class Contact extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.querySelector("#home").classList.remove("active");
    }
    render() {
        return (
            <>
              <Contacts/>
              <Scripts/>  
            </>
        )
    }
}
