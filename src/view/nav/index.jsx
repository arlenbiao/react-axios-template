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
  render() {
    return (
      <ul className="nav-index">
        <li>全部</li>
        <li>未付款</li>
        <li>待评价</li>
        <li>售后</li>
      </ul>
    );
  }
}

export default Nav
