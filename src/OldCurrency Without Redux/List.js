import React from 'react';
import Item from './Item';


class List extends React.Component{
    constructor(props){
        super(props);
        console.log('list',props)
    }

        render () {
            return(
            <div>
                {this.props.Currencies.map((currency)=>(
                    <Item items={currency} Value={this.props.Value}/>
                ))}
          
            
            </div>
            )
        }
  
}
export default List;
