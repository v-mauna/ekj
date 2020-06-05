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
            text-align:center;
            width: 700px;
          }
          #main-img {
            margin-bottom: 20px;
            width: 700px;
          }
          a{
            text-decoration: none;
            color: black;
          }
          a:hover{
            transition: 3s ease;
            color: red;
          }

          #logos {
            width: 650px;
            margin-top: 20px;
            display: flex;
            position: relative;
            align-self: center;
            align-content: center;
            margin-bottom: 100px;
          }

          #logos > img:hover {
            transform: translate(0, -20%);
          }

          #media {
            width: 650px;
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
              font-size: 14px;
              width: 400px;
              padding: 1em;
              line-height: 1.6em;
            }
            #logos {
              width: 300px;
              align-self: center;
              justify-content: center;
              display: flex;
              flex-wrap: wrap;
            }
            #media{
              width: 400px;
              padding: 1em;
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
          content='Ellen Killoran is a seasoned journalist and former media & entertainment reporter featured in Forbes, Rolling Stone,
        IBTimes, Maxim, Crime Online, & The L Magazine'
        />
        <title>Ellen Killoran || Home</title>
      </Head>
      <img id='main-img' alt='Full Length Image of Ellen Killoran' src={EKFL} />
      <p>
        Ellen Killoran is a crime journalist with a previous background in
        culture and media reporting. Currently a staff reporter and editor at
        CrimeOnline, her work has been seen in Forbes, Rolling Stone, the New
        York Observer, Vulture, Newsweek and more. She
        is always on the hunt for new leads on undercovered stories. If you have
        a tip or a story idea, please reach out <strong><a target='_blank' rel='noopener noreferrer' href='mailto:ekilloran@gmail.com'>here</a></strong>.
      </p>
      <div>
        <p id='media'>/as seen in/</p>
        <div id='logos'>
          <img alt='Observer Logo' id='observer' src={Observer} />
          <img alt='Rolling Stone Logo' id='rollingStone' src={RS} />
          <img alt='Vulture Logo' id='vulture' src={Vulture} />
          <img alt='Newsweek Logo' id='newsweek' src={Newsweek} />
          <img alt='Forbes Logo' id='forbes' src={Forbes} />
        </div>
      </div>
    </div>
  </div>
)

export default Home
