import React from 'react'
import './index.scss'
import axios from '../../model/axios';
import { Link } from 'react-router-dom';
class Nav extends React.Component {
  componentWillMount() {
    this.getData()
  }
  getData = () => {
    axios.post('/api/dynamic/get/14352', {
      lotteryId: 14262,
      uid: 3234
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }
  goHome=()=> {
    this.props.history.push("/home")
  }
  render() {
    return (
      <nav>这是nav组件，也是首页<Link to="home">点我跳转去home组件路由</Link>
        <button onClick={this.goHome}>这是按钮式跳转</button>
      </nav>
    );
  }
}

export default Nav
