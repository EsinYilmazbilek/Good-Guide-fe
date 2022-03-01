import { isOwner } from '../../lib/auth'

function BrandCommentCard({ content, user, handleDelete }) {
  return (
    <div className="card">
      <div className="media">
        <div className="media-content">
          <div className="card-body">
            <p>
              <strong>{user.username}</strong>
              <br />
              {content}
            </p>
            {isOwner(user._id) &&
              <button className="button" onClick={handleDelete}>X</button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandCommentCard