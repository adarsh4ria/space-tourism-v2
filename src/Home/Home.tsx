import { Link } from 'react-router-dom'
import './home.scss'
import { styled } from 'styled-components'

const Button = styled(Link)`
  width: 9.375rem;
  background: #fff;
  border-radius: 50%;
  color: #0b0d17;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 0 0 rgba(#fff, 0.1);
  transition: 200ms;

  &:hover {
    box-shadow: 0 0 0 4rem rgba(255, 255, 255, 0.2);
  }

  @media screen and (min-width: 30rem) {
    width: 15.125rem;
  }

  @media screen and (min-width: 48rem) {
    width: 17.125rem;
  }
`

const Home = () => {
  return (
    <div className="home">
      <section className="home__content">
        <h5>SO, YOU WANT TO TRAVEL TO</h5>
        <h1 className="h1">SPACE</h1>
        <p>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </section>
      <Button to="/destination">
        <span className="h4">EXPLORE</span>
      </Button>
    </div>
  )
}

export default Home
