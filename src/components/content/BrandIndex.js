import React from 'react'
import axios from 'axios'
import BrandCard from './BrandCard'
import { createNotification } from '../common/Notification'
import { useHistory, useLocation } from 'react-router'



function BrandIndex() {
  const history = useHistory()
  useLocation()

  const [brands, setBrands] = React.useState(null)
  const [filterValueConnection, setFilterValueConnection] = React.useState('all')
  const [filterValueType, setFilterValueType] = React.useState('allTypes')
  
  const [isNotFound, setIsNotFound] = React.useState(false)
  const [userBrand, setUserBrand] = React.useState('')


  React.useEffect(() => {
    const getBrandData = async () => {
      try {
        const response = await axios.get('/api/brands')
        //console.log(response.data)
        setBrands(response.data)
      } catch (err) {
        setIsNotFound(true)
        // createNotification()
        // history.push('/brands')
      }
    }
    getBrandData() 
  }, [])

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

  console.log(userBrand)

  const handleChange = (e) => {
    setUserBrand(e.target.value)
  }


  const handleConnection = (e) => {
    console.log('selected')
    setFilterValueConnection(e.target.value)
    console.log(setFilterValueConnection(e.target.value))
  }

  const handleType = (e) => {
    console.log('selected')
    setFilterValueType(e.target.value)
    console.log(setFilterValueType(e.target.value))
  }

  const filteredBrands = (brands) => {

    const connections = brands.filter(brand => {
      if (filterValueConnection === 'multipleConnections') {
        return brand.multipleConnections === true 
      } else if (filterValueConnection === 'singleConnection') {
        return brand.singleConnection === true
      } else {
        return filterValueConnection === 'all'
      }
    })
    console.log(connections)
    const valueArray = connections.filter(connection => {
      if (filterValueType === 'clothing') {
        return connection.clothing === true
      } else if (filterValueType === 'footwear') {
        return connection.footwear === true
      } else {
        return filterValueType === 'allTypes'
      }
    })
    console.log(valueArray)
    return valueArray
  }



  return (
    <section>
      <div className="justify-content-md-center">
        <div className="input-group mt-4">
          <div className="search-dropdown">
            <select className="btn btn-warning dropdown-toggle" onChange={handleConnection}>
              <option className="dropdown-item" value="all">Connections</option> 
              <option className="dropdown-item" value="multipleConnections">With Multiple Connections</option>
              <option className="dropdown-item" value="singleConnection">With A Single Connection</option>
            </select>
          </div>
          <div>&nbsp;&nbsp;&nbsp;</div>
          <div className="search-dropdown">
            <select className="btn btn-warning dropdown-toggle" onChange={handleType}>
              <option className="dropdown-item" value="allTypes">Types</option> 
              <option className="dropdown-item" value="clothing">Clothing</option>
              <option className="dropdown-item" value="footwear">Footwear</option>
            </select>
          </div>
          <div>&nbsp;&nbsp;&nbsp;</div>
          <div>&nbsp;&nbsp;&nbsp;</div>
          <div>&nbsp;&nbsp;&nbsp;</div>
        </div>

        <div className="index-search input-group mb-3">
          <form onSubmit={handleSubmit} className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Enter brand name here"
              value={userBrand}
              onChange={handleChange}
            />
            &nbsp;&nbsp;&nbsp;
            <button type="submit" onSubmit={handleSubmit} className="btn btn-warning">Search</button>
          </form>
        </div>
      </div>

      

      <div>
        <div className="index d-flex align-content-start flex-wrap">
          
          {brands ? 
            filteredBrands(brands).map(brand => (
              <BrandCard 
                key={brand._id}
                name={brand.name}
                logo={brand.logo}
                clothing={brand.clothing}
                footwear={brand.footwear}
                brandId={brand._id} />
            ))
            :
            <p>...loading</p>
          }
        </div>
      </div>

    </section>
  )
}

export default BrandIndex



// if (filterValueConnection === 'multipleConnections') {
//   return brand.multipleConnections === true 
// } else if (filterValueConnection === 'singleConnection') {
//   return brand.singleConnection === true
// } 

// if (filterValueType === 'clothing') {
//   return brand.clothing === true
// } else if (filterValueType === 'footwear') {
//   return brand.footwear === true
// } else {
//   return filterValueConnection === 'all'
// }

// console.log(filterValue === 'all', brand)
// console.log(brand.multipleConnections === true)
// console.log(brand.clothing === true)
// console.log(filterValueType)
// console.log(brand.footwear)
// console.log(brand.clothing)
// console.log(brand)



// if (filterValueConnection === 'multipleConnections') {
//   return brand.multipleConnections === true 
// }
// if (filterValueConnection === 'singleConnection') {
//   return brand.singleConnection === true 
// }
// if (filterValueType === 'clothing') {
//   return brand.clothing === true
// }
// if (filterValueType === 'footwear') {
//   return brand.footwear === true
// }
// if (filterValueConnection === 'multipleConnections' && filterValueType === 'clothing') {
//   return brand.multipleConnections === true && brand.clothing === true
// } else if (filterValueConnection === 'multipleConnections' && filterValueType === 'footwear') {
//   return brand.multipleConnections === true && brand.footwear === true
// } 
// if (filterValueConnection === 'singleConnection' && filterValueType === 'clothing') {
//   return brand.singleConnection === true && brand.clothing === true
// } else if (filterValueConnection === 'singleConnection' && filterValueType === 'footwear') {
//   return brand.singleConnection === true && brand.footwear === true
// } else {
//   return filterValueConnection === 'all'
// }