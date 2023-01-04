import React from 'react';
import { connect } from 'react-redux';
import { storeValue } from "./action";

class Input extends React.Component{
    constructor(props){
        super(props);
        // console.log(this.props,'checkinggg')
    }
 
    inputHandle=(e)=>{
            // this.setState({
            //     ...this.state,value:e.target.value
            // })
            this.props.StoreValue(e.target.value);
            // console.log(this.props,'checking')
    
        }

        render () {
            return(
            <div>
                {/* {this.props.Value} */}
          <input type="text" name="" id="input" 
          onChange={this.inputHandle}
          />
          
            </div>
            )
        }
}
//this is the state of STORE_VALUE in console redux
const mapStateToProps=(state)=>{
    return {
    Value: state.currency.value
    }
}

const mapDispatchToProps = {
    StoreValue: storeValue,
  };

export default connect(mapStateToProps, mapDispatchToProps)(Input);
