import { Link } from "react-router"

const blogCard = () => {
  return (
    <Link>
        <div className="blog-img">
            <img src="" alt="blog-img"/>
        </div>
        <div className="blog-info">
            <h3>This is the title of the blog post</h3>
            <p>
                This is the selling headline of the blog article you are about to read, I hope it entertains you.
            </p>
        </div>
    </Link>
  )
}

export default blogCard