import React from 'react'

import { createBrandComment } from '../../lib/api'

function BrandCommentForm({ fetchBrand, brandId }) {
  const [commentValue, setCommentValue] = React.useState('')
  const [isError, setIsError] = React.useState(false)

  const handleChange = (e) => {
    setCommentValue(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createBrandComment(brandId, { content: commentValue })
      setCommentValue('')
      fetchBrand()
    } catch (err) {
      setIsError(true)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="control">
          <textarea className="textarea form-control" 
            name="content" 
            placeholder="Write your comment here" 
            rows="3"
            onChange={handleChange} 
            value={commentValue} />
        </div>
        {isError && <p className="warning">Please write a comment and try again!</p>}
      </div>
      &nbsp;
      <div className="form-group">
        <button type="submit" className="btn btn-warning">Submit</button>
      </div>
      <div>&nbsp;&nbsp;&nbsp;</div>
      <div>&nbsp;&nbsp;&nbsp;</div>
    </form>
  )

}

export default BrandCommentForm