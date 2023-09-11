import { Link } from 'react-router-dom'
import './home.scss'

const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <h5>SO, YOU WANT TO TRAVEL TO</h5>
        <h1>SPACE</h1>
        <p>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link to="/destination" className="home__explore">
        <h4>EXPLORE</h4>
      </Link>
    </div>
  )
}

export default Home
