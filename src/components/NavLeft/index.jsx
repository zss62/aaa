import React,{Component} from 'react';
import {Menu} from 'antd';
import './../../style/common.less'
import './index.less'
import MenuConfig from './../../config/menuConfig'
import {NavLink} from 'react-router-dom'
const { SubMenu } = Menu;
export default class NavLeft extends Component{
    componentWillMount(){
      const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
          menuTreeNode
        })
    }
    //菜单渲染
    renderMenu=(data)=>{
        return data.map((item)=>{
          if(item.children){
            return(
            <SubMenu title={item.title} key={item.key}>
              {this.renderMenu(item.children)}
            </SubMenu>
          )
          }
          return <Menu.Item title={item.title} key={item.key}>
                   <NavLink to = {item.key}>{item.title}</NavLink> 
                 </Menu.Item>
        })
    }
  render(){

    return(
      <div>
          <div className="logo">
          <img src="/logo-ant.svg" alt=""/>
          <h1>Imooc Ms</h1>
          </div>
          
        <Menu
            theme="dark"
        >
          {this.state.menuTreeNode}
        </Menu>,
      </div>
    )
  }
}
