import React, {FC , ChangeEvent, MouseEvent, useState, Dispatch, SetStateAction,} from 'react'
import { SeriesProps  } from '../interfaces/SeriesProps'

interface Props {
    seriesList: SeriesProps["seriesList"],
    setSeriesList: Dispatch<SetStateAction<SeriesProps["seriesList"]>>
}

const Form: FC<Props> = ({ seriesList, setSeriesList }) => {

    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [cover, setCover] = useState("")
    const [imdb, setImdb] = useState<SeriesProps | any>(0)
    const [seasons, setSeasons] = useState<SeriesProps | any>(0)

    const setNameinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    const setGenreinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setGenre(event.target.value);
    }
    const setCoverinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setCover(event.target.value);
    }
    const setImdbinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setImdb(Number(event.target.value));
    }
    const setSeasonsinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSeasons(Number(event.target.value));
    }

    const handleClick = (event: MouseEvent<HTMLInputElement>) => {
        if (!name || !genre || !cover && !imdb || seasons==0) {
            alert("Please enter series info!");
            return;
        }
        const seriesData = {
            name: name, 
            genre:genre, 
            cover:cover, 
            imdb:Number(imdb), 
            season:Number(seasons) // why? seasons it error!!!
        };

        setSeriesList([...seriesList, seriesData])
        setName("")
        setGenre("")
        setCover("")
        setImdb(0)
        setSeasons(0)
    }

  return (
    <div className='card customDis'>
    <h1>My favourite tv series</h1>
      <div className="form-conntainer">
        <div className="box-input">
            <label htmlFor="name">Name</label>
            <input type='text' className='form-control' name="name" value={name} onChange={setNameinputHandler}></input>
        </div>
        <div className="box-input">
            <label htmlFor="genre">Genre</label>
            <input type='text' className='form-control' name="genre" value={genre} onChange={setGenreinputHandler}></input>
            </div>
        <div className="box-input">
            <label htmlFor="cover">Cover</label>
            <input type='text' className='form-control' name="cover" value={cover} onChange={setCoverinputHandler}></input>
            </div>
        <div className="box-input">
            <label htmlFor="imdb">IMDB</label>
            <input type='number' min={0} className='form-control' aria-label="Small" aria-describedby="inputGroup-sizing-sm" name="imdb" value={imdb} onChange={setImdbinputHandler}></input>
            </div>
        <div className="box-input">
            <label htmlFor="seasons">Seasons</label>
            <input type='number' min={0} className='form-control' name="seasons" value={seasons} onChange={setSeasonsinputHandler}></input>
            </div>
            <div className='box-button'>
            <button type='button' className='btn btn-success customButton' onClick={handleClick as React.MouseEventHandler<HTMLButtonElement>}>Add Series</button>
            </div>
            
        </div>

    </div>
  )
}

export default Form
