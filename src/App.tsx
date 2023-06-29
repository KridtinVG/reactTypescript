import React,{ useState } from 'react';
import { SeriesProps } from './interfaces/SeriesProps';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {

  const [seriesList, setSeriesList] = useState<SeriesProps["seriesList"]>([]);

  return (
    <div className="App">
      <Form seriesList={seriesList} setSeriesList={setSeriesList}/>
      <List seriesList={seriesList}/>
    </div>
  );
}

export default App;
