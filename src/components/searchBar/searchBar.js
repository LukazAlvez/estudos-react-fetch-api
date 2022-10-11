import { useState, useEffect } from 'react'
import fechtMovie from '../../services/apiMovie'
import MovieBox from '../movieBox/movieBox'
import '../searchBar/searchBar.css'

const SearchBar = () =>{

    const [movie, setMovie] = useState({
        filmes: []
    })

    const [input, setInput] = useState({
        value: 'Digite nome de um filme'
    })

    const [search, setSearch] = useState('')

    useEffect(()=>{
        fechtMovie(search).then((data)=>{
            console.log(data)
            setMovie({
                filmes: data.Search
            })
        })
    },[search])

    const handleChange = (event) =>{
        setInput({
            value: event.target.value
        })
    }

    const handleSubmit = (event) =>{
        setSearch(input.value)
        event.preventDefault();
    }

    return(
        <div>
            <div className='searchBar'>
                <input value={input.value} onChange={handleChange}></input>
                <button onClick={handleSubmit}>Search</button>
            </div>
            <MovieBox movies={movie.filmes}/>
        </div>
    )
}

export default SearchBar;