import React, {Component} from 'react';
import {Route, Redirect, HashRouter} from 'react-router-dom';
import Navigation from '..//Navigation/Navigation';
import About from '../About/About';
import Projects from '../Projects/ProjectMap.js';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';

export default class Header extends Component {
    render () {
        return (
            <HashRouter>
                <header>
                    <Navigation/>
                </header>

                <div className = 'navigation-container'>
                    <Route exact path = '/' render = {() => <Redirect to = '/about' />} />
                    <Route path = '/about' component = {About}/>
                    <Route path = '/projects' component = {Projects}/>
                    <Route path = '/contact' component = {Contact}/>
                    <Route path = '/resume' component = {Resume}/>
                </div>
            </HashRouter>
        )
    }
}
