import React from 'react';
import Item from './Item';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { storeCurrencies } from './action';


class List extends React.Component {
    constructor(props) {
        super(props);
        console.log('list', props)
    }


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
        // this.setState({
        //   ...this.state,
        //   currencies: result,
        // });

        this.props.StoreCurrency(result);
        // this.props.fetchCurrencies();
    }

    render() {
        return(
                    <div>
                         {this.props.Currency.map((currency)=>(
                            <Item items={currency} Value={this.props.Value}/>
                         ))}

                        {/* {this.props.Currency.map((currency) => ( 
                  <Item currency={currency} value={this.props.Value} /> 
                ))} */}

                   </div>
                    )
                }

        }

   

        const mapStateToProps = (state) => {
            return {
              Value: state.currency.value,
              Currency: state.currency.currencies,
            };
          };



const mapDispatchToProps = {
    StoreCurrency: storeCurrencies
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
