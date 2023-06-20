import React from 'react'

class MyApp extends React.Component{
    constructor(props){
        super(props);
        this.state={age:28}
        this.clicked=this.clicked.bind(this);
    }
    clicked(){
        this.setState({
            age:88
        })
    }
    
    render(){
        return(
            <div>
                <h1>{this.state.age}</h1>
                <button onClick={this.clicked}>click to travel</button>
            </div>
        )
    }
}
export default MyApp;
