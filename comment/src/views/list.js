import React, { Component } from 'react';

// 引入文件
import '../css/item.css'
import Subitem from './subitem'

class List extends Component {
  render() {
    console.log(this.props.data);
    var subItem = this.props.data.map(function (item, index){
      return (
        <Subitem
          user={item.user}
          time={item.time}
          content={item.content}
          key={index} //// 似乎在循环中必须加上key值
        />
      )
    })
    return (
      <ul>
        {subItem}
      </ul>
    );
  }
}

export default List;
