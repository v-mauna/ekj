import Head from 'next/head'
import EKFL from './EKFullLength.jpg'
import RS from './rolling_stone_logo.png'
import CrimeOnline from './CrimeOnlinePng.png'
const Home = () => (
  <div className='container'>
    <style jsx>
      <link
        href='https://fonts.googleapis.com/css2?family=Arimo&family=Jost:ital,wght@0,400;1,200&family=Karla&family=Spectral&display=swap'
        rel='stylesheet'
      />
      {`
      .container {
        position: absolute;
        left: 25%;
        top: 10%;
        margin-left: 2em;
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
        }
        img{
          width: 50vw;
          height: 50%;
          align-content: center;
          justify-content: center;
          align-self: center;
    
        }
        #media{
          text-align: right;
          <div id='rollingStone'/>
        }
        
        #rollingStone{
          width: 20%;
          margin-right: 5%;
        }
        #crimeOnline{
          width: 15%;
        }
      `}

    </style>
    <Head>
      <title>Ellen Killoran</title>
    </Head>
    <img alt='Full Length Image of Ellen Killoran' src={EKFL}/>
    <p>
      Ellen is a seasoned journalist and former media & entertainment reporter
      with a taste for true crime. Formerly a senior editor at IBTimes, her work
      has appeared in Forbes, Rolling Stone, Maxim, NYMag, Indiewire, and more.
      She co-produced the HBO documentary "Youth Knows No Pain" and appeared in
      a documentary series that aired alongside the Lifetime movie "Manson's
      Lost Girls."
    </p>
    <div>
    <p id='media'>/as seen in/</p>
    <div id='logos'>
    <img id='rollingStone' src={RS}/>
    <img id='crimeOnline' src={CrimeOnline}/>
    </div></div>

  </div>
)

export default Home
