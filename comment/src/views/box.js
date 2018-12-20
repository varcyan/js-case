import React, { Component } from 'react';
// 引入css
import '../css/box.css'

// html
import List from './list.js'
import Inp from './inp.js'

class Box extends Component {
  constructor () {
    super()
    // 使this.state首先ia指向這个初始值
    this.state = this.initial();
  }
  initial () {
    // 设定一个初始值
    return {data:[
      {
        user: 'default',
        time: 'default',
        content: 'default'
      }
    ]}
  }
  change (user,content) {
    console.log('来自父级的忠告');
    console.log('用户名是：' + user + ',内容是：' + content);
    console.log(this.state.data);
    // 把新数据合并到this.state.data
    var newdata = this.state.data.concat(
      [{
        user: user,
        content: content,
        time: '1 分钟前'
      }]
    )
    // 用setState()设置this.state
    this.setState({
      data: newdata
    })
    console.log(this.state.data);
  }
  render() {
    return (
      <div className="box">
        这里是comment box
        <Inp change={this.change.bind(this)} />
        <List data={this.state.data } />        
      </div>
    );
  }
}
// 记得导出
export default Box;
