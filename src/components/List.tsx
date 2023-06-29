import React, {FC} from 'react'
import { SeriesProps } from '../interfaces/SeriesProps'

const List:FC<SeriesProps>=({seriesList}) => (
  <div className="series-list">
  {seriesList.map((series,idx)=>(
    <div key ={idx} className="series-item">
      <img src={series.cover} alt="Series-cover"/>
      <div className='box-text-list'>
      <p><b>{series.name}</b></p>
      <p>{series.genre}</p>
      <p>Seasons : {series.season}</p>
      <p>Rate : {series.imdb}</p>
      </div>
    </div>
  ))}
  </div>
)

export default List
