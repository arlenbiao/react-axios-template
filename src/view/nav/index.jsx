import React from 'react'
import './index.css'
import axios from '../../model/axios';
class Nav extends React.Component {
  getData = () => {
    axios.get(`/api/api/lottery/get/14352`, {
      data: {
        lotteryId: "14305",
        uid: "3926"
      }}).then(res => {
      // 14305，uid：3926
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }
  render() {
    return (
      <nav>
        <ul onClick={this.getData}>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </nav>
    );
  }
}

export default Nav
