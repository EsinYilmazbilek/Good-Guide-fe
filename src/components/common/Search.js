import React from 'react'
import { useHistory } from 'react-router'
import { createNotification } from '../Notification'

function Search() {

  const [userBrand, setUserBrand] = React.useState('')
  const [brands, setBrands] = React.useState([])
  const [isNotFound, setIsNotFound] = React.useState(false)

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const searchedBrand = brands.find(brand => {
      return brand.name.toLowerCase() === userBrand.toLowerCase()
    })
    if (!searchedBrand) {
      console.log(isNotFound, userBrand)
      setIsNotFound(true)
      setUserBrand('')
      createNotification('Looks like the brand you searched is not on the list. Please see the full list.')
      return 

    }
    const searchedBrandId = searchedBrand._id
    history.push(`/brands/${searchedBrandId}`)
  }
  

  const handleChange = (e) => {
    setUserBrand(e.target.value)
  }



  return (
    <div className="input-group mb-3">
      <form onSubmit={handleSubmit} className="input-group">
        <input
          className="form-control"
          type="text"
          placeholder="Enter brand name here"
          value={userBrand}
          onChange={handleChange}
        />
                &nbsp;&nbsp;    
        <button type="submit" onSubmit={handleSubmit} className="btn btn-warning">Search</button>
      </form>
    </div>
  )
}

export default Search