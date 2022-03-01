import React from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { isAuthenticated } from '../../lib/auth'
import { getSingleBrand } from '../../lib/api'
import { deleteBrandComment } from '../../lib/api'
import BrandCommentCard from './BrandCommentCard'
import BrandCommentForm from './BrandCommentForm'
// import Error from '../common/Error'

function BrandShow() {
  const { brandId } = useParams()
  const [brand, setBrand] = React.useState(null)
  // const [isError, setIsError] = React.useState(false)


  React.useEffect(() => {
    const getBrandData = async () => {
      const response = await axios.get(`/api/brands/${brandId}`)
      setBrand(response.data)
      // console.log(response.data)
    }
    getBrandData()
  }, [brandId])

  const fetchBrand = React.useCallback(() => {
    const getData = async () => {
      try {
        const response = await getSingleBrand(brandId)
        console.log(brandId)
        setBrand(response.data)
        console.log(setBrand(response.data))
      } catch (err) {
        console.log(err)
      }
    }
    getData
  }, [brandId])

  console.log(fetchBrand)


  React.useEffect(() => {
    fetchBrand()
    // console.log(fetchBrand())
  }, [brandId, fetchBrand])


  const handleDeleteComment = async (commentId) => {
    if (window.confirm('Do you want to delete this comment?')) {
      try {
        await deleteBrandComment(brandId, commentId)
        fetchBrand()
      } catch (err) {
        console.log(err)
      }
    }
  }


  return (
    <section>
      <div className="container">
        {/* {isError && <Error />} */}
        {brand ? (
          <div className="row">
            <div className="col">
              <figure>
                <img src={brand.logo} alt={brand.name} />
              </figure>
            </div>
            <div className="col">
              <h4 className="brandName">{brand.name}</h4>
              <p>{brand.copy}</p>
            </div>
          </div>
        ) : (
          <p>brand is loading</p>
        )}
        &nbsp;&nbsp;&nbsp;
        
        <div>
          {brand?.comments.map(comment => (
            <BrandCommentCard
              key={comment._id}
              content={comment.content}
              user={comment.user}
              handleDelete={() => handleDeleteComment(comment._id)}
            />
          ))}
        </div>

        {isAuthenticated() && (
          <BrandCommentForm
            fetchBrand={fetchBrand}
            brandId={brandId}
          />
        )}

        <div>&nbsp;&nbsp;&nbsp;</div>
        <div>&nbsp;&nbsp;&nbsp;</div>
        
        <div>
          <h6 className="display-5">
        Click to see the full list
          </h6>
          <button className="btn btn-warning"><Link to="/brands" className="button">See All Brands</Link></button>
        </div>
      </div>
    </section>
  )
}

export default BrandShow