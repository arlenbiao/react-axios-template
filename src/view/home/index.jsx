import React from 'react'
class Home extends React.Component{
    toNav = () => {
        this.props.history.push("/nav")
    }
    render(h) {
        return (
            <div>
                这是home<span onClick={this.toNav}>跳转去nav</span>
            </div>
        )   
    }
}
export default Home
