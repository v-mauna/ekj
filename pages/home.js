import Head from 'next/head'
import EKFL from '../public/photos/EKFullLength.jpg'
import RS from '../public/logos/rolling_stone_logo.png'
import Vulture from '../public/logos/Vulture(2).jpg'
import Forbes from '../public/logos/forbes.png'
import Newsweek from '../public/logos/newsweek-logo-png-transparent.png'
import Observer from '../public/logos/observer.png'

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
          }
          .container {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            margin-left: 25%;
            margin-top: -20%;
            font-size: 16px;
            width: 50vw;
            line-height: 2em;
            justify-content: center;
            align-content: center;
            text-align: left;
            margin-bottom: 5%;
          }
          p {
            font-family: 'Spectral', serif;
            font-weight: 500;
            width: 80%;
            margin-left: 10%;
          }
          img {
            width: 50vw;
            height: 50%;
            align-content: center;
            justify-content: center;
            align-self: center;
          }

          #logos{
            width: 50vw;
          }

          #media {
            text-align: right;
            padding-bottom: 2em;
            align-content: center;
          }
          #observer{
          width: 15%;
          margin-left: 3%;
          margin-right: 3%;
          }

          #rollingStone {
            width: 20%;
            margin-right:3%;
          }
          #vulture {
            width:15%;
            margin-right: 3%;
          }
          #newsweek {
            width: 17.5%;
            margin-right: 3%;
          }
          #forbes {
            width: 15%;
          }
          #maxim {
            width: 12.5%;
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
          <img id='observer' src={Observer}/>
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
