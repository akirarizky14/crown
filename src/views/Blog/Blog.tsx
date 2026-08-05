import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../css/views/Blog/Blog.css'
import Footer from '../../components/Footer/Footer'
import crownLogo from '../../assets/crown-logo.svg'
import { CATEGORIES, GRID_POSTS, HERO_POST, SIDE_POSTS, initials } from '../../data/blogPosts'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Blog() {
  const [activeCategory, setActiveCategory] = useState('Semua')

  const filteredPosts = activeCategory === 'Semua' ? GRID_POSTS : GRID_POSTS.filter((post) => post.category === activeCategory)

  return (
    <>
      <section className="container-blog">
        <div className="wrapper-blog">
          <div className="hero-blog">
            <Link to={`/blog/${HERO_POST.slug}`} className="hero-main-blog hero-main-blog--placeholder">
              <img src={crownLogo} alt="" />
              <span className="badge-blog">{HERO_POST.category}</span>
              <div className="hero-info-blog">
                <h1>{HERO_POST.title}</h1>
                <div className="hero-meta-blog">
                  <span>Oleh {HERO_POST.author}</span>
                  <span>{HERO_POST.date}</span>
                </div>
              </div>
            </Link>
            <div className="hero-side-blog">
              {SIDE_POSTS.map((post) => (
                <Link to={`/blog/${post.slug}`} className="side-card-blog side-card-blog--placeholder" key={post.slug}>
                  <img src={crownLogo} alt="" />
                  <span className="badge-blog">{post.category}</span>
                  <span className="arrow-blog">
                    <ArrowIcon />
                  </span>
                  <div className="side-info-blog">
                    <h3>{post.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="title-row-blog">
            <h2>Blog</h2>
            <p>Tips, panduan, dan info seputar dunia otomotif dan rental mobil di Jakarta.</p>
          </div>

          <div className="filter-blog">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`pill-blog ${activeCategory === cat ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid-blog">
            {filteredPosts.map((post) => (
              <Link to={`/blog/${post.slug}`} className="card-blog" key={post.slug}>
                <div className="image-card-blog image-card-blog--placeholder">
                  <img src={crownLogo} alt="" />
                  <span className="badge-blog">{post.category}</span>
                  <span className="arrow-blog">
                    <ArrowIcon />
                  </span>
                </div>
                <div className="info-card-blog">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="meta-card-blog">
                    <span className="avatar-blog">{initials(post.author)}</span>
                    <span className="author-blog">{post.author}</span>
                    <span className="dot-blog">&middot;</span>
                    <span className="date-blog">{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Blog
