import React from 'react';
import styles from './App.module.css';
import Cards from './components/Cards/Cards'
import Charts from './components/Charts/Charts'
import CountryPicker from './components/CountryPicker/CountryPicker'
import {fetchData} from './api'


class App extends React.Component {

  state = {
    data : {},
    country:''
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData})
  }

  handleCountryChange = async (country) => {
   const data = await fetchData(country);

   this.setState({ data, country: country });
 }

  render(){

    const { data,country } = this.state;
    console.log(data);
  return (
    <div className={styles.container}>
      <Cards data={data}/>
      <CountryPicker  handleCountryChange={this.handleCountryChange}/>
      <Charts data={data} country={country}/>
    </div>
  );
}
}

export default App;
