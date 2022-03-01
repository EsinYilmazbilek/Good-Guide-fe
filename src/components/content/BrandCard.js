import React from 'react'
import { Link } from 'react-router-dom'

function BrandCard({ name, logo, clothing, footwear, brandId }) {

  return (
    <div className="card">
      <Link to={`brands/${brandId}`}>
        <figure>
          <img src={logo} alt={name} className="card-img-top"/>
        </figure>
        <div className="card-body">
          {/* <h3 className="card-title">{name}</h3> */}
          <div className="card-text">
            <h5>Clothing: {clothing}</h5>
            <h5>Footware: {footwear}</h5>
          </div>
        </div>
      </Link>

    </div>
  )
}

export default BrandCard