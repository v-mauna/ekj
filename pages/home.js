import Head from 'next/head'
import EKFL from './images/EKFullLength.jpg'
import RS from './images/rolling_stone_logo.png'
import Vulture from './images/Vulture(2).jpg'
import Forbes from './images/Forbes.png'
import Newsweek from './images/newsweek-logo-png-transparent.png'
import Observer from './images/observer.png'

const Home = () => (
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
            position: relative;
            margin-left: 300px;
            margin-bottom: 200px;
          }

          .container {
            display: flex;
            flex-direction: column;
            height: 100%;
            top: 2em;
            box-sizing: border-box;
            font-size: 16px;
            width: calc(100%-300px);
            line-height: 2em;
            justify-content: center;
            align-content: center;
            text-align: left;
          }
          .container p {
            font-family: 'Spectral', serif;
            font-weight: 500;
            width: 700px;
          }
          #main-img {
            position: relative;
            top: 0;
            margin-bottom: 20px;
            width: 700px;
          }

          #logos {
            width: 800px;
            margin-top: 20px;
            display: flex;
            position: relative;
            align-self: center;
            align-content: center;
            margin-bottom: 100px;
          }

          #media {
            text-align: right;
            padding-bottom: 2em;
            margin-top: 2em;
            align-content: center;
          }
          #observer {
            width: 100px;
            margin-left: 3%;
            margin-right: 3%;
          }
          #rollingStone {
            width: 134px;
            margin-right: 3%;
          }
          #vulture {
            width: 100.2px;
            margin-right: 3%;
          }
          #newsweek {
            width: 116.9px;
            margin-right: 3%;
          }
          #forbes {
            width: 100.2px;
          }

          @media (max-width: 700px) {
            .container {
              display: flex;
              flex-direction: column;
              margin-left: 1em;
              width: 100vw;
              left: 0;
              align-content: center;
            }
            #main-img {
              margin-bottom: 20px;
              left: 0;
              width: 400px;
            }

            .container p {
              font-size: 10px;
              width: 400px;
              margin-left: 0;
              line-height: 1.6em;
            }
            #logos {
              width: 300px;
              margin-left: 0;
              align-self: center;
              justify-content: center;
              display: flex;
              flex-wrap: wrap;
            }
            #observer,
            #rollingStone,
            #vulture,
            #newsweek,
            #forbes {
              width: 104px;
              padding: 1em;
              align-self: center;
              justify-content: center;
              margin-left: 1em;
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
        <title>Ellen Killoran || Home</title>
      </Head>
      <img id='main-img' alt='Full Length Image of Ellen Killoran' src={EKFL} />
      <p>
        Ellen Killoran is a seasoned journalist and former media & entertainment
        reporter with a taste for true crime. Formerly a senior editor at
        IBTimes, her work has appeared in Forbes, Rolling Stone, Maxim, NYMag,
        Indiewire, and more. She co-produced the HBO documentary "Youth Knows No
        Pain" and appeared in a documentary series that aired alongside the
        Lifetime movie "Manson's Lost Girls."
      </p>
      <div>
        <p id='media'>/as seen in/</p>
        <div id='logos'>
          <img id='observer' src={Observer} />
          <img id='rollingStone' src={RS} />
          <img id='vulture' src={Vulture} />
          <img id='newsweek' src={Newsweek} />
          <img id='forbes' src={Forbes} />
        </div>
      </div>
    </div>
  </div>
)

export default Home
