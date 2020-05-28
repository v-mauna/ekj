import Head from 'next/head'
import Layout from '../components/layout'
import EKFL from './images/CrimeCon.jpg'

const About = () => (
  <Layout>
    <div className='wrapper'>
      <div className='container'>
        <style jsx>
          <link
            href='https://fonts.googleapis.com/css2?family=Arimo&family=Jost:ital,wght@0,400;1,200&family=Karla&family=Spectral&display=swap'
            rel='stylesheet'
          />
          {`
            .wrapper {
              display: block;
            }
            .container {
              display: flex;
              flex-direction: column;
              box-sizing: border-box;
              margin-left: 25%;
              margin-top: -25%;
              font-size: 16px;
              width: 50vw;
              line-height: 2em;
              justify-content: center;
              align-content: center;
              text-align: left;
            }
            p {
              font-family: 'Spectral', serif;
              font-weight: 500;
              width: 80%;
              margin-left: 10%;
              margin-bottom: 10%;
            }
            img {
              width: 50vw;
              height: 50%;
              align-content: center;
              justify-content: center;
              align-self: center;
            }
          `}
        </style>
        <Head>
          <script
            src='https://kit.fontawesome.com/6f92a9206c.js'
            crossOrigin='anonymous'
          />
          <title>Ellen Killoran || About</title>
        </Head>
        <img alt='Full Length Image of Ellen Killoran' src={EKFL} />
        <p>
          Ellen is a seasoned journalist and former media & entertainment
          reporter with a taste for true crime. Formerly a senior editor at
          IBTimes, her work has appeared in Forbes, Rolling Stone, Maxim, NYMag,
          Indiewire, and more. She co-produced the HBO documentary "Youth Knows
          No Pain" and appeared in a documentary series that aired alongside the
          Lifetime movie "Manson's Lost Girls."
        </p>
      </div>
    </div>
  </Layout>
)

export default About
