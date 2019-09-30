import React from 'react'
import {Link,Route} from 'react-router-dom'
import ReactEle from './video/react'
import Vue from './video/vue'
function Video(){
    return (
        <div>
            <ul>
                <li>
                    <Link to="/video/react/">toreact</Link>
                </li>

                <li>
                    <Link to="/video/vue/">to Vue</Link>
                </li>

            </ul>

            <div>
                <Route path="/video/react/" component={ReactEle}></Route>
                <Route path="/video/vue/" component={Vue}></Route>
            </div>
        </div>
    )
}

export default Video