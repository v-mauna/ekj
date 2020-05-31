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
          }

          .container {
            display: flex;
            flex-direction: column;
            height: 100%;
            box-sizing: border-box;
            font-size: 16px;
            width: calc(100%-200px);
            line-height: 2em;
            justify-content: center;
            align-content: center;
            text-align: left;
            margin-bottom: 100px;
          }
          p {
            font-family: 'Spectral', serif;
            font-weight: 500;
            width: 600px;
            margin-left: 50px;
            align-self: center;
            align-content: center;
          }
          img {
            top: 2em;
            width: 700px;
            align-self: center;
            align-content: center;
          }

          #logos {
            width: 600px;
            margin-left: 350px;
            display: flex;
            position: relative;
            align-self: center;
            align-content: center;
          }

          #media {
            text-align: right;
            padding-bottom: 2em;
            align-content: center;
          }
          #observer {
            width:100px;
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

          @media (max-width: 700px){ 
           .container {
            display: flex;
            flex-direction: column;
            margin-left: 1em;
           }
            .container img{
              width: 300px;
              margin-bottom: 20px;
            }
          
          .container p{
            font-size:10px;
            width: 300px;
            line-height: 1.6em;
            margin-left: 50px;
          }
          
          #observer, #rollingStone, #vulture,#newsweek,#forbes{
            width: 25%;
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
      <img alt='Full Length Image of Ellen Killoran' src={EKFL} />
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
