// import React from 'react'
import { ExternalLink } from 'react-external-link'
import { Link } from 'react-router-dom'
import { useHistory, useLocation } from 'react-router'
import axios from 'axios'
import { createNotification } from '../common/Notification'

//* For MUI
import * as React from 'react'


function Home() {
  
  const history = useHistory()
  useLocation()

  const [userBrand, setUserBrand] = React.useState('')
  const [brands, setBrands] = React.useState([])
  const [isNotFound, setIsNotFound] = React.useState(false)
  

  React.useEffect(() => {
    const getBrandData = async () => {
      try {
        const response = await axios.get('/api/brands')
        console.log(response.data)
        setBrands(response.data)
      } catch (err) {
        setIsNotFound(true)
      }
    }
    getBrandData() 
  }, [])
  //console.log('brands', brands)


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
    <div className="px-0 py-0 text-center">
      <div className="hero-area">
        <div className="hero-text">
          <h1 className="display-1 fw-bold">
            Good Guide.
          </h1>
        </div>
      </div>
      
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>

      <h4 className="display-4">
          The cattle industry is the single largest driver of deforestation of the Amazon rainforest and of tropical forests globally.
      </h4>

      <div>&nbsp;</div>

      <h4 className="display-4">
        Find Out Which Fashion Brands Are Contributing To Deforestation By Buying Leather From Cattle Farms In The Amazons
      </h4>

      <div>
        &nbsp;&nbsp;&nbsp;
      </div>
      <div>
        &nbsp;&nbsp;&nbsp;
      </div>
      <div>
        &nbsp;&nbsp;&nbsp;
      </div>

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

      <div>
        &nbsp;&nbsp;&nbsp;
      </div>
      <div>
        &nbsp;&nbsp;&nbsp;
      </div>
      <div>
        &nbsp;&nbsp;&nbsp;
      </div>

      <div className="home-text">
        <p>The results have been taken from from the research carried out by <a href="https://www.stand.earth/" className="link">Stand.earth</a>, a charity working to protect the environment, for studying purposes.</p>
        <p>Based in the US and Canada, Stand.earth specialises in chain of custody research, identifying and tracking raw materials as they move through complex supply chains and eventually become consumer products.</p>
        <p>For this study, they analysed nearly 500,000 rows of customs data obtained from multiple data providers, and cross-referenced this with data collected from other sources listed below to uncover hidden supply chains linking shoe and fashion brands to Amazon rainforest deforestation.</p>
        <p>The study has thus far resulted in  over 400 individual supply chain connections between various companies (leather tanneries in Brazil, leather processors in various countries, product manufacturers, and shoe/fashion brands around the world).</p>
      </div>

      <div>
        <img className="process-image" src="https://i.imgur.com/tXisTO9.png" />
      </div>


      <div>
        <h6 className="display-6">
        Click to see the full list
        </h6>
        <button className="btn btn-warning"><Link to="/brands" className="button">See All Brands</Link></button>
      </div>

      <div>
      &nbsp;&nbsp;&nbsp;
        <hr/>
        &nbsp;&nbsp;&nbsp;
      </div>
            
      <div className="home-text">
        <p>Countless studies and investigations have consistently demonstrated that JBS, the largest beef/leather company in Brazil, is the largest contributor to Amazon rainforest destruction.</p>
        <p>All companies sourcing directly from JBS or indirectly from JBS via leather processors are therefore linked to deforestation of the Amazon rainforest.</p>
        <p>Brands with multiple connections to Amazon deforestation are at highest risk of driving deforestation.</p>
        &nbsp;&nbsp;&nbsp;
        <div >
          <h6 className="display-6">
            Check Out The Better Options In The UK
          </h6>
          <button className="btn btn-warning"><ExternalLink href="https://ecothes.com/blog/sustainable-brands-uk" target="_blank" className="button">Take Me There</ExternalLink></button>
        </div>
      </div>

      <div className="bottom-blank">
      </div>

    </div>
  )
}

export default Home