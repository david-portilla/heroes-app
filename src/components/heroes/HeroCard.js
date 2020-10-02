import React from 'react'
import { Link } from 'react-router-dom'

const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="card ms-3" style={ { maxWidth: 540 } }>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={ `./assets/heroes/${ id }.jpg` } className="card-img" alt={ superhero } />
        </div>

        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{ superhero }</h3>
            <p className="card-text">{ alter_ego }</p>
            {
              (alter_ego !== characters)
              && <p>{ characters }</p>
            }
            <p className="card-text">
              <small className="text-muted">{ first_appearance }</small>
            </p>
            <Link to={ `./hero/${ id }` }>
              More...
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCard
