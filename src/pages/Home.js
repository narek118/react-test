import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import DataTable from '../components/table';
import { changeCount, setData } from '../redux/actions/data';
import { getData } from '../services/api';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const { count, setData } = this.props;

    const { data } = await getData(count);

    setData(Object.values(data));
  }

  async handleChange(e) {
    const { changeCount, setData } = this.props;
    const count = e.target.value;

    const { data } = await getData(count);

    setData(Object.values(data));
    changeCount(count);
  }

  render() {
    const { list, count } = this.props;

    return (
      <section>
        <h4>Select the count</h4>
        <Select
          value={count}
          onChange={this.handleChange}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={'All'}>All</MenuItem>
        </Select>
        <DataTable list={list}/>
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  count: state.data.count,
  list: state.data.list,
});

export default connect(
  mapStateToProps,
  { setData, changeCount },
)(Home);
