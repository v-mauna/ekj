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
              margin-left: 20%;
              margin-top: -30%;
              margin-bottom: 20%;
              font-size: 16px;
              width: 75vw;
              line-height: 2em;
              justify-content: center;
              align-content: center;
              text-align: left;
            }

            h4 {
              font-family: 'Julius Sans One', sans-serif;
              font-size: 24px;
              margin-bottom: 4%;
              margin-left: 50%:
              font-style: bold;
              justify-content: center;
              text-align: center;
              text-transform: capitalize;
              letter-spacing: 2px;
            }
            p {
              margin: 1em 0 10px 10%;
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
        <h4> Youth Knows No Pain</h4>
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
              Gorgeous Colorado mom missing: Was her bike found UNDER a bridge?{' '}
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
              'Best friend' says killer fiance asked mistress to KILL Colorado mom Kelsey Berreth{' '}
              <a
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
    </div>
  </Layout>
)

export default Multimedia
