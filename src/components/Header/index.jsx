import React,{Component} from 'react';
import {Row,Col} from 'antd'
import './index.less'
import Util from './../../utils/utils'
import axios from 'axios'
export default class Header extends Component{
  state={}
  componentWillMount(){
    this.setState({
      userName:'河畔一角'
    })
    setInterval(()=>{
      let sysTime = Util.formateDate(new Date().getTime());
      this.setState({
        sysTime
      })
    },1000)
    this.getWeatherAPIData()
  }
  componentWillUnmount() {
    this.setState = ()=>false;
}
 getWeatherAPIData(){
    axios.get("http://api.k780.com/?app=weather.today&weaid=1&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json")
    .then((res)=>{
      console.log("aaaa",res)
        if(res.status == '200'){
            let data = res.data.result.weather;
            let data_pig = res.data.result.weather_icon;
            this.setState({
              data:data,
              data_pig:data_pig
            })
        }
    })
 }
  render(){
    return(
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎，河畔一角</span>
            <a href="/#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
              首页
          </Col>
          <Col span={20} className="weather">
                <span className="date">{this.state.sysTime}</span>
                <span className="detail">
                  <img src={this.state.data_pig} alt="" />
                   {this.state.data}
                </span>
          </Col>
        </Row>
      </div>
    )
  }
}