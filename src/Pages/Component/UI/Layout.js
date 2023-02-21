//1. Import Area
import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import {Row,Col }from 'react-bootstrap'
import { Header } from './Header'
import Footer from './Footer'
import { Aside } from './Aside'
//2. Definition Area
//2.1 Properties

//2.2 Constructor

//2.3 Methods
export default class Layout extends Component {
    //Every Class Component Must Have Render Method
  render() {
    //Every Render Should Have Return Something
    return (
             <>
            <Header />   
            <main>
                <Row className="h-100">
                    <Col sm={2} className="v_tbdr h-100">
                        <Aside /></Col>
                    <Col sm={10} className="v_tbdr h-100">
                       <Outlet /></Col>
                </Row>
            </main>
           <Footer />
        </>
    )
  }
}


//3. Export Area
//3.1 Default Named Export Area
//3.2 Named Export Area