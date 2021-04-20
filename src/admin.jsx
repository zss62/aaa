import React, { Component } from 'react';
import { Row, Col } from 'antd'
import './style/common.less'
import Header from './components/Header'
import NavLeft from './components/NavLeft'
import Footer from './components/Footer'
import Home from './pages/home/index'
export default class Admin extends Component {


  render() {
    return (
      <Row className="containter">
        <Col span={4} className='nav-left'>
          <NavLeft />
        </Col>
        <Col span={20} className='main'>
          <Header />
          <Row className="content">
           {this.props.children}
          </Row>
          <Footer />
        </Col>
      </Row>

    )
  }
}