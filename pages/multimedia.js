import Head from 'next/head'
import Layout from '../components/layout'
import Trailer from '../sections/youthKnowsNoPain'
import BreakingDown from '../sections/breakingDown'
import BreakingDown2 from '../sections/breakingDown2'
const Toggle = () => {
  const [Stream, toggleShow] = React.useState(true)

  return (
    <div>
      <a onClick={() => toggleShow(!Stream)}>{Stream ? 'Stream' : ''}</a>
    </div>
  )
}

const Multimedia = () => (
  <Layout>
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
              box-sizing: border-box;
              margin-bottom: 20%;
              font-size: 16px;
              width: calc(100%-200px);
              line-height: 2em;
              justify-content: center;
              align-content: center;
              text-align: left;
            }

            h4 {
              font-family: 'Julius Sans One', sans-serif;
              font-size: 24px;
              padding: 0;
              margin-bottom: 4%;
              font-style: bold;
              justify-content: center;
              text-align: center;
              text-transform: capitalize;
              letter-spacing: 2px;
              line-height: 1em;
            }
            h6{
              font-family: 'Arimo', sans-serif;
              font-size: 9px;
              margin: 0 0 4%;
              font-style: bold;
              font-style: italic;
              text-transform: capitalize;
              letter-spacing: 2px;

            }
            #video-text{
              margin: 1em 0 0 ;
              font-size: 20px;
              line-height: 1em;
              letter-spacing: 1px;
              font-weight: 500;
              font-family: 'Cormorant Garamond', serif;

            }
            p {
              margin: 1em 0 10px;
              font-size: 18px;
              line-height: 1.5em;
              letter-spacing: 1px;
              font-weight: 500;
              font-family: 'Cormorant Garamond', serif;
            }
            img {
              width: 50vw;
              height: 50%;
              align-content: center;
              justify-content: center;
              align-self: center;
            }
            .fas,
            .far, .fab{
              margin-left: 12px;
              color: black;
            }
            .fas: hover {
              color: red;
            }
            #audio,
            #audio-2 {
              width: 20%;
            }
            @media (max-width: 700px){ 
              .container {
               display: flex;
               flex-direction: column;
               margin-left: 1em;
             }
             .container img{
               width: 300px;
             }
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
        <div>
        <h4> Video</h4>
        <p id='video-text'> Youth Knows No Pain</p>
        <h6>Co-Producer, HBO</h6>
        <Trailer/>
        </div>

        <div className='podcasts'>
          <h4>Podcasts</h4>
          <div>
            <p>
              {' '}
              Are cops close to finding the Long Island Serial Killer?{' '}
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://art19.com/shows/crime-stories-with-nancy-grace/episodes/e6c6d199-3b2b-40a9-b6b5-29f15fd6a192'
              >
                <i className='fas fa-microphone-alt' />
              </a>
            </p>
          </div>
          <div>
            <p>
              {' '}
              The mysterious disappearance of Suzanne Morphew{' '}
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://art19.com/shows/crime-stories-with-nancy-grace/episodes/1282d933-299b-49d6-82a2-ee10364e06b6'
              >
                <i className='fas fa-microphone-alt' />
              </a>
            </p>
          </div>
          <div>
            <p>
              {' '}
             Mistress is accomplice, key witness in presumed murder of missing Colorado woman Kelsey Berreth<a
                target='_blank'
                rel='noopener noreferrer'
                href='https://art19.com/shows/crime-stories-with-nancy-grace/episodes/4d9adaaf-1fda-4ce6-8dfe-0d6c965cb51f'
              >
                <i className='fas fa-microphone-alt' />
              </a>
            </p>
          </div>
          <BreakingDown/>
          <BreakingDown2/>
          
        </div>
      </div>
  </Layout>
)

export default Multimedia
