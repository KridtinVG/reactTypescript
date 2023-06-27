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
        if (!name && !genre && !cover && !imdb && !seasons) {
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
    <div>
      <h1>Form</h1>
      <div className="form-container">
        <div className="form-div">
            <label htmlFor="name">Name</label>
            <input type='text' name="name" value={name} onChange={setNameinputHandler}></input>
            <label htmlFor="genre">Genre</label>
            <input type='text' name="genre" value={genre} onChange={setGenreinputHandler}></input>
            <label htmlFor="cover">Cover</label>
            <input type='text' name="cover" value={cover} onChange={setCoverinputHandler}></input>
            <label htmlFor="imdb">IMDB</label>
            <input type='number' name="imdb" value={imdb} onChange={setImdbinputHandler}></input>
            <label htmlFor="seasons">Seasons</label>
            <input type='number' name="seasons" value={seasons} onChange={setSeasonsinputHandler}></input>
            <button type='button' onClick={handleClick as React.MouseEventHandler<HTMLButtonElement>}>Add Series</button>
        </div>
    </div>
    </div>
  )
}

export default Form
