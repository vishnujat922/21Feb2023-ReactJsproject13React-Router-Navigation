//1. Import Area
import React, { Component } from 'react'
import Navigation from './Navigation';
//2. Definition Area
//1 Properties 

//2 Constructor

//3 Methods
class Header extends Component {
    //Every Class Component Must Have Render method 
    render() {
        //Every Render Method Should Have Return Something
        return (
            <>
                <header>
                   <Navigation /> 
                </header>
            </>
        )
    }
}
//3. Export Area
//3.1 Default Export Area
//3.2 Named Export Area
export { Header }