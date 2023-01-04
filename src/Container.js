import React from "react";
import CounterUi from "./CounterUi";

class Container extends React.Component {
    constructor() {
        super();
        this.state ={
            // count:0,
            // value:0
        username:''
        }

    
    }
    // increment=()=>{
    //     this.setState ({
    //         count : this.state.count +1,
    //         value: this.state.value+5
    //     },
      
    //     )
    // }
    // decrement=()=>{
    //     this.setState({
    //         count: this.state.count-1
    //     })
    // }
    submitForm=(hello)=>{
        console.log(hello)
        this.setState({
            // name: e.target.value,
            // username: this.state.name,
          
        })
    }

    render() {
        console.log('state', this.state)
        return (
            // <p>
            //     <CounterUi count={this.state.count} plus={this.increment}/>
            //     {this.state.value}
            //     {this.state.count} <button onClick={this.increment}>+</button>
            //      <button onClick={this.decrement}>-</button>
            // </p>
            <>
            <h2>Welcome to form</h2>
            <p>my Name is:- {this.state.name}</p>
            <form action="">

          
            <input type="text" name ="username" onChange={this.submitForm} />
            </form>
            </>
        )
    }
}

export default Container;