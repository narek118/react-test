import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import { setData } from '../redux/actions/data';
import { getData } from '../services/api';

export class Liquidity extends Component {
  async componentDidMount() {
    const { count, setData } = this.props;

    const { data } = await getData(count);

    setData(Object.values(data));
  }

  customFormatter(value, name, props) {
    return name === 'Market Cap' ? `(${props.payload.data.name}) : ${value}` : value;
  }

  render() {
    const { count, list } = this.props;
    const formattedArray = [];
    list.forEach((item) => {
      formattedArray.push({
        data: { ...item },
        x: item.quotes.USD.market_cap,
        y: item.quotes.USD.volume_24h,
        z: item.quotes.USD.percent_change_24h,
      });
    });

    return (
      <section>
        <h4>Showing {count} results</h4>
        <ScatterChart width={500} height={500} margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}>
          <CartesianGrid />
          <XAxis dataKey={'x'} type="number" name='Market Cap'/>
          <YAxis dataKey={'y'} type="number" name='Volume (24h)'/>
          <ZAxis dataKey={'z'} name='Percent Change (24h)' unit='%'/>
          <CartesianGrid />
          <Scatter data={formattedArray} fill='#8884d8' shape="circle"/>
          <Legend />
          <Tooltip formatter={this.customFormatter} cursor={{ strokeDasharray: '3 3' }}/>
        </ScatterChart>
      </section>);
  }
}

const mapStateToProps = state => ({
  count: state.data.count,
  list: state.data.list,
});

export default connect(
  mapStateToProps,
  { setData },
)(Liquidity);
