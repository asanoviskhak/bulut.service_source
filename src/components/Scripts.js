
import React, { Component } from 'react'

export default class Scripts extends Component {
    componentDidMount(){
        appendScript("js/jquery.min.js");
        appendScript("js/jquery-migrate-1.4.1.min.js");
        appendScript("js/popper.min.js");
        appendScript("js/bootstrap.min.js");
        appendScript("js/plugins.js");
        appendScript("js/anime.js");
        appendScript("js/uncover.js");
        appendScript("js/sliceRevealer.js");
        appendScript("js/custom.js");
    }
    componentWillUnmount(){
        removeScript("js/jquery.min.js");
        removeScript("js/jquery-migrate-1.4.1.min.js");
        removeScript("js/popper.min.js");
        removeScript("js/bootstrap.min.js");
        removeScript("js/plugins.js");
        removeScript("js/anime.js");
        removeScript("js/uncover.js");
        removeScript("js/sliceRevealer.js");
        removeScript("js/custom.js");
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const appendScript = (scriptToAppend) => {
    const script = document.createElement("script");
    script.src = scriptToAppend;
    script.async = false;
    document.body.appendChild(script);
}
const removeScript = (scriptToremove) => {
    let allsuspects=document.getElementsByTagName("script");
    for (let i=allsuspects.length; i>=0; i--){
if (allsuspects[i] && allsuspects[i].getAttribute("src")!==null 
  && allsuspects[i].getAttribute("src").indexOf(`${scriptToremove}`) !== -1 ){
           allsuspects[i].parentNode.removeChild(allsuspects[i])
        }    
    }
}
