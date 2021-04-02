import { bing } from '../../api/index.js'
import React from 'react';
class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        }
    }
    componentWillMount() {
        bing().then(res => {
            console.log(res);
        })
    }
    addCoun() {
        this.setState({
            num: this.state.num + 1
        })
        for (let index = 0; index < this.state.num; index++) {
            console.log(index);
        }
    }
    render() {
        return (
            <div>
                {this.state.num}
                <button onClick={this.addCoun.bind(this)}>count++</button>
            </div>
        )
    }
}
export default Hello