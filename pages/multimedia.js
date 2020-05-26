import Head from 'next/head'
import Layout from '../components/layout'
import ReactPlayer from 'react-player'
import ReactAudioPlayer from 'react-audio-player'

const Toggle = () => {
  const [Stream, toggleShow] = React.useState(true)

  return (
    <div>
      <a onClick={() => toggleShow(!Stream)}>
        {Stream ? 'Stream' : ''}
      </a>
      </div>
  )
}

const Multimedia = () => (
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
              margin-bottom: 20%;
              font-size: 16px;
              width: 50vw;
              line-height: 2em;
              justify-content: center;
              align-content: center;
              text-align: left;
            }

            .container h4 {
              font-family: 'Julius Sans One', sans-serif;
              font-size: 24px;
              margin-bottom: 4%;
              font-style: bold;
              justify-content: center;
              text-align: center;
              text-transform: capitalize;
              letter-spacing: 2px;
            }
            p {
              font-family: 'Spectral', serif;
              font-weight: 500;
              font-size: 18px;
              width: 100%;
              margin-left: 5%;
            }
            img {
              width: 50vw;
              height: 50%;
              align-content: center;
              justify-content: center;
              align-self: center;
            }
            .fas,
            .far {
              margin-left: 12px;
              color: black;
            }
            .fas: hover {
              color: red;
            }
            #audio, #audio-2 {
              width: 20%;
            }
          `}
        </style>
        <Head>
          <script
            src='https://kit.fontawesome.com/6f92a9206c.js'
            crossOrigin='anonymous'
          />
          <title>Ellen Killoran || Multimedia</title>
        </Head>
        <div className='podcasts'>
          <h4>Podcasts</h4>
          <div>
            <p>
              {' '}
              Are cops close to finding the Long Island Serial Killer?{' '}
              <a href='https://art19.com/shows/crime-stories-with-nancy-grace/episodes/e6c6d199-3b2b-40a9-b6b5-29f15fd6a192'>
                <i className='fas fa-microphone-alt' />
              </a>
            </p>
          </div>
          <div>
            <p>
              {' '}
              Are cops close to finding the Long Island Serial Killer?{' '}
              <a href='https://art19.com/shows/crime-stories-with-nancy-grace/episodes/e6c6d199-3b2b-40a9-b6b5-29f15fd6a192'>
                <i className='fas fa-microphone-alt' />
              </a>
            </p>
          </div>
          <div>
            <p>
              Breaking Down - Part One
              <a
                onClick={()=>document.getElementById('audio').style.display='block'}
              >
                <i className='far fa-play-circle' />
                <ReactAudioPlayer
          id='audio'
          src='https://ellenkilloran.s3.amazonaws.com/BreakDown-Pt1.mp3'
          autoPlay='false'
          controls
          style={{ width: 300, backgroundColor: 'black', marginLeft:0,display:'none' }}
        />
              </a>
            </p>
          </div>
        </div>
        <div>
            <p>
              Breaking Down - Part Two
              <a
                onClick={()=>document.getElementById('audio-2').style.display='block'}
              >
                <i className='far fa-play-circle' />
                <ReactAudioPlayer
          id='audio-2'
          src='https://ellenkilloran.s3.amazonaws.com/Break+Down+(3-15)+Ellen+Kiloran+Pt+2+(1).mp3'
          autoPlay='false'
          controls
          style={{ width: 300, backgroundColor: 'black', marginLeft:0,display:'none' }}
        />
              </a>
            </p>
          </div>
          <div>
          <ReactPlayer url='https://www.youtube.com/watch?v=2pJCSnjHa4Q' />
          </div>
          
        </div>
        
    </div>
  </Layout>
)

export default Multimedia
