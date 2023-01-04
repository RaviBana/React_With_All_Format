import React from 'react';

class FormElement extends React.Component{
    constructor(){
        // super();

        // this.state({
        //     name: ""
        // })
        // // this.submitForm = this.submitForm.bind(this)
    }
    // submitForm=()=>{
    //     this.setState({
    //    name: this.state.name
    //     })
    // }

    render(){
        return(
            <>
            <h2>Welcome to From</h2>
            {/* <h3>{this.state.name}</h3> */}
            {/* <input type="text" name="name" onChange={this.submitForm} id="" /> */}
            <input type="submit" value="" />
            </>
        )
    }
}
export default FormElement;   