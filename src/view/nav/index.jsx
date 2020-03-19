import React from 'react'
import './index.scss'
import axios from '../../model/axios';
class Nav extends React.Component {
  getData = () => {
    axios.post('/api/dynamic/get/14352', {
      lotteryId: 14262,
      uid: 3234
    }).then(res => {
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
