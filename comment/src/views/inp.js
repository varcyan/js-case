import React, { Component } from 'react';
// 引入css
import '../css/inp.css'

// form部分的视图
class Inp extends Component {
  change () {
    // 获取两个输入框并存在变量中
    let inpUser = this.refs.user;
    let inpContent = this.refs.content;
    // 存取user和content 并作为参数传到父组件
    if (this.valIsOk(inpUser.value)&&this.valIsOk(inpContent.value)) {
      let user = inpUser.value;
      let content = inpContent.value;
      // 这里用的是父组件的方法 通过this.props读取到的
      this.props.change(user, content);
      // 清空输入框
      inpUser.value = '';
      inpContent.value = '';
    } else {
      alert('姓名和内容都必须填写~')
    }
  }
  valIsOk (val) {
    if (val === '') {
      return false;
    }
    return true;
  }
  render() {
    // 由于试图代码中的this并没有指向实例 因此借用bind指向实例
    return (
      <form>
        <input ref="user" className="inp_name" placeholder="请输入用户名" />
        <textarea ref="content" className="inp_content"></textarea>
        <input
          className="submit"
          type="button"
          value="send"
          onClick={this.change.bind(this)}
        />
      </form>
    );
  }
}

// 记得导出
export default Inp;
