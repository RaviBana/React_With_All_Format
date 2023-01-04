import React from 'react';
import Input from './Input';
import List from './List';

class Container extends React.Component{
  



        render () {
            console.log('hello',this.state)
            return(
            <div id='container'>

          <h2>Currency Chart</h2>

             <Input/>
            <List/>
            </div>
            )
        }
  
}
export default Container;
