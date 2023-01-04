import React from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import { fetchCurrencies } from "./action";


class List extends React.Component {
    constructor(props) {
        super(props);
        console.log('list', props)
    }

    async componentDidMount() {
        this.props.fetchCurrencies();
    }

    render() {
        return (
            <div>
                {this.props.Currency.map((currency) => (
                    <Item items={currency} Value={this.props.Value} />
                ))}
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
    fetchCurrencies: fetchCurrencies
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
