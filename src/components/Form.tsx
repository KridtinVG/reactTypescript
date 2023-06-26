import React, {FC , ChangeEvent, MouseEvent, useState, Dispatch, SetStateAction} from 'react'
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

    const setNameinputHandker = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    const setGenreinputHandker = (event: ChangeEvent<HTMLInputElement>) => {
        setGenre(event.target.value);
    }
    const setCoverinputHandker = (event: ChangeEvent<HTMLInputElement>) => {
        setCover(event.target.value);
    }
    const setImdbinputHandker = (event: ChangeEvent<HTMLInputElement>) => {
        setImdb(event.target.value);
    }
    const setSeasonsinputHandker = (event: ChangeEvent<HTMLInputElement>) => {
        setSeasons(event.target.value);
    }
  return (
    <div>
      <h1>Form</h1>
    </div>
  )
}

export default Form
