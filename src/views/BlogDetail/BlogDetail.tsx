import { Link, Navigate, useParams } from 'react-router-dom'
import '../../css/views/BlogDetail/BlogDetail.css'
import Footer from '../../components/Footer/Footer'
import { getPostBySlug, initials } from '../../data/blogPosts'

function BlogDetail() {
  const { slug } = useParams()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return (
    <>
      <section className="container-blogdetail">
        <div className="wrapper-blogdetail">
          <Link to="/blog" className="back-blogdetail">
            &larr; Kembali ke Blog
          </Link>

          <span className="badge-blogdetail">{post.category}</span>
          <h1>{post.title}</h1>

          <div className="meta-blogdetail">
            <span className="avatar-blogdetail">{initials(post.author)}</span>
            <div>
              <p className="author-blogdetail">{post.author}</p>
              <p className="date-blogdetail">{post.date}</p>
            </div>
          </div>

          <div className="image-blogdetail">
            <img src={post.image} alt={post.title} />
          </div>

          <div className="content-blogdetail">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default BlogDetail
