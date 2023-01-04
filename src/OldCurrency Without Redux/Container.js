import React from 'react';
import Input from './Input';
import List from './List';
import Cookies from 'js-cookie';

class Container extends React.Component{
    constructor(){
        super();
        this.state= {
            value:'',
            currencies: []
        }
    }


    // async componentDidMount(){
    //     const response = await fetch(
    //         "https://webmaster-fake-api.herokuapp.com/currencies",
    //         {
    //             method: "GEt",
    //             header: {
    //                 Authorization: `Bearer ${Cookies.get("Token")}`,
    //             }
    //        }
    //     )
    //     const result = await response.json()
    //     console.log(result)

    //     this.setState({
    //         ...this.state, currencies:result
    //     })
    // }




    async componentDidMount() {
        const res = await fetch(
          "https://webmaster-fake-api.herokuapp.com/currencies",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${Cookies.get("Token")}`,
            },
          }
        );
    
        const result = await res.json();
        this.setState({
          ...this.state,
          currencies: result,
        });
        // this.props.storeCurrencies(result);
        // this.props.fetchCurrencies();
      }



    inputHandle=(e)=>{
        this.setState({
            ...this.state,value:e.target.value
        })

    }

        render () {
            // console.log('hello',this.state)
            return(
            <div id='container'>

          <h2>Currency Chart</h2>

             <Input input={this.inputHandle}/>
            <List Value={this.state.value} Currencies={this.state.currencies}/>
            </div>
            )
        }
  
}
export default Container;


// import React from "react";
// import Input from "./Input";
// import List from "./List";
// // import "./currency.css";

// class Container extends React.Component {
//   render() {
//     // console.log("state", this.state);
//     return (
//       <div id="wrapper">
//         hello
//         <Input />
//         <List />
//       </div>
//     );
//   }
// }

// export default Container;