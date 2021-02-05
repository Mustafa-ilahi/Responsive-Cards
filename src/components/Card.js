import React from 'react';
import '../index.css'
import '../App.css'
import {Card, CardDeck} from 'react-bootstrap';
import uniImg from '../components/config/uni.jpg';
class Header extends React.Component{
    render(){
        return(
            <div id="main">
                <div id="one">
                    <img src={uniImg} id="uniImg"/>
                    <h4>Shah Grammar High School</h4>
                    <ul>
                        <hr/>
                        <li><b>Science </b></li>
                        <li>Pass Out in 2016</li>
                    </ul>
                </div>
                <div id="two">
                    <img src={uniImg} id="uniImg"/>
                    <h4>P.E.C.H.S Govt Degree Science College</h4>
                    <ul>
                        <hr/>
                        <li><b>Pre Engineering  </b></li>
                        <li>2016-2018</li>
                    </ul>
                </div>
                <div id="three">
                    <img src={uniImg} id="uniImg"/>
                    <h4>Sir Syed University of Technology and Engineering</h4>
                    <ul>
                        <hr/>
                        <li><b>Bachelor of Science in Software Engineering</b></li>
                        <li>2019-2022</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Header;      