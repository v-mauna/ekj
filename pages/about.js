import Head from 'next/head'
import CrimeCon from './images/CrimeCon.jpg'
import Layout from '../components/layout'

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
        .container {
          display: flex;
          flex-direction: column;
          height: 100%;
          flex-wrap: wrap;
          top: 2em;
          padding: 1em;
          box-sizing: border-box;
          font-size: 16px;
          line-height: 2em;
          text-align: center;
        }
        .container p {
          font-family: 'Spectral', serif;
          font-weight: 500;
          width: 700px;
          margin-bottom: 100px;
        }
        #main-img {
          position: relative;
          top: 0;
          width: 700px;
        }
        #photo-credit{
          font-size: 10px;
          text-align: left;
          font-family: 'Arial',sans-serif;
          text-transform: uppercase;
          margin-bottom: 20px;
          color: #5c677d;
        }


          @media (max-width: 700px) {
            .container {
              display: flex;
              flex-direction: column;
              width: 100vw;
              left: 0;
              padding: 1em;
              align-content: center;
            }
            #main-img {
              left: 0;
              width: 400px;
            }
            #photo-credit{
              font-size: .5em;
              text-align: left;
              font-family: 'Arial',sans-serif;
              text-transform: uppercase;
              margin-bottom: 20px;
              color: #5c677d;
            }

            .container p {
              font-size: 14px;
              width: 400px;
              left: 0;
              margin-left: 0;
              text-align: left;
              line-height: 1.6em;
            }
           
          }
        `}
      </style>
      <Head>
        <script
          src='https://kit.fontawesome.com/6f92a9206c.js'
          crossOrigin='anonymous'
        />
        <meta
          name='description'
          content='Ellen Killoran is a seasoned journalist and former media & entertainment reported features in Forbes, Rolling Stone,
        IBTimes, Maxim, Crime Online, & The L Magazine'
        />
        <title>Ellen Killoran || About</title>
      </Head>
      <img id='main-img' alt='Ellen Killoran at CrimeCon' src={CrimeCon} />
      <span id='photo-credit'>Leigh Egan</span>
      <p>
      Ellen Killoran is a crime journalist with a previous background in
      culture and media reporting. Currently a staff reporter and editor at
      CrimeOnline, her work has been seen in Forbes, Rolling Stone, the New
      York Observer, Vulture, Newsweek and more. She
      is always on the hunt for new leads on undercovered stories.
      </p>
      
    </div>
  </div>
  </Layout>
)

export default About
