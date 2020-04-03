import React from 'react'
class Home extends React.Component{
    componentDidMount() {
       console.log(this.props.match.params.id);
       
   }
    toNav = () => {
        this.props.history.push("/nav")
    }
    render(h) {
        return (
            <div>
            </div>
        )   
    }
}
export default Home
