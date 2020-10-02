import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName'
import HeroCard from '../heroes/HeroCard'

const SearchScreen = ({ history }) => {

  const location = useLocation()
  const queryString = require('query-string');
  const { q = '' } = queryString.parse(location.search)

  const [ formValues, handleInputChange ] = useForm({
    searchText: q
  })

  const { searchText } = formValues

  const heroesFiltered = useMemo(() => getHeroesByName(q), [ q ])

  const handleSearch = (e) => {
    e.preventDefault()
    history.push(`?q=${ searchText }`)
  }

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-4 animate__animated animate__fadeIn">
          <h2>Search form</h2>
          <hr />

          <form onSubmit={ handleSearch }>
            <input
              type="text"
              name="searchText"
              placeholder="Find your hero"
              className="form-control"
              autoComplete="off"
              value={ searchText }
              onChange={ handleInputChange }
            />
            <button
              type="submit"
              className="btn m-2 btn-block btn-outline-primary"
            >
              Search
            </button>
          </form>

        </div>
        <div className="col-8 animate__animated animate__fadeIn">

          <h2>Results</h2>
          <hr />
          {
            heroesFiltered.map(hero => (
              <HeroCard
                key={ hero.id }
                { ...hero }
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SearchScreen
