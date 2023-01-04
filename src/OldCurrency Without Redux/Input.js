import React from 'react';


class Input extends React.Component{
    constructor(props){
        super(props);
    }


        render () {
            return(
            <div>
          <input type="text" name="" id="input" onChange={this.props.input}/>
          
            </div>
            )
        }
  
}
export default Input;
