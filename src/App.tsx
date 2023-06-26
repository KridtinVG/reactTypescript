import React,{ useState } from 'react';
import { SeriesProps } from './interfaces/SeriesProps';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {

  const [seriesList, setSeriesList] = useState<SeriesProps["seriesList"]>([]);

  return (
    <div className="App">
      <h1>My favourite tv series</h1>
      <Form seriesList={seriesList} setSeriesList={setSeriesList}/>
      
    </div>
  );
}

export default App;
