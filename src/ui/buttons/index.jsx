import React,{Component} from 'react';
import {Card,Button} from 'antd';

export default class Buttons extends Component{
  render(){
    return(
      <div>
        <Card title="基本按钮">
              <Button type="primary">主按钮</Button>
              <Button type="dashed">dashed</Button>
              <Button type="text">Text</Button>
              <Button type="link">Link</Button>
        </Card>
      </div>
    )
  }
}
