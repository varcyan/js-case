import React, { Component } from 'react';

// 引入文件
import '../css/item.css'

class Subitem extends Component {
  render() {
    return (
      <li className="item">
        <div>
          <span>user: </span>
          {this.props.user}
        </div>
        <div>
          <span>time: </span>
          {this.props.time}
        </div>
        <div>
          <span>content: </span>
          {this.props.content}
        </div>
      </li>
    );
  }
}

export default Subitem;
