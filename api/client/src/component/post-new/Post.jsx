import './post.css'
import {Link} from 'react-router-dom'

export default function Post({ post }) {
  const PF = 'http://localhost:5000/images/'
  //mlhmvq6amqed.i.optimole.com/HIId8M4.WANK~27a14/w:940/h:788/q:auto/https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Copy-of-Copy-of-Rustic-Female-Teen-Magazine-Cover-52.jpg
 return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCat">
          {
            post.categories.map(c => (
              <span className="postCat">{c.name}</span>
            ))
          }
        </div>
        <Link to={`/post/${post._id}`} className="link">
        <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
