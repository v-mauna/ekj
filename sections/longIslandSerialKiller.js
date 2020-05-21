
import GilgoBeach from '../pages/Gilgo-beach-killing-leather-belt.jpg'
import MaureenBarnes from '../pages/Maureen-Brainard-Barnes.jpg'

const LongIsland = () => {
    return (
      <section>
        <style jsx>
          {`
            #header {
              font-family: 'Spectral', serif;
              font-size: 20px;
              margin-bottom: 4%;
              font-weight: 200;
              justify-content: center;
              text-align: center;
              text-transform: uppercase;
              letter-spacing: 2px;
            }
            #pub-desc {
              margin: 1em 0 10px 10%;
              font-size: 16px;
              line-height: 1.5em;
              width: 50%;
              letter-spacing: 1px;
              text-transform: uppercase;
              font-weight: 800;
              font-family: 'Karla', sans-serif;
            }
  
            #pub-link {
              text-decoration: none;
              color: black;
              font-size: 12px;
              font-style: italic;
              font-family: 'Questrial', sans-serif;
              margin: 0 0 20% 10%;
              border-bottom: 1px dashed;
            }
            #writings #pub-link:hover {
              color: rgba(0, 0, 0, 0.5);
            }
  
            .pub-img {
              width: 30%;
              margin-top: 3em;
              margin-left: 10%;
            }
          `}
        </style>
        <div id='writings'>
        <h4 id='header'>Long Island Serial Killer</h4>
        <div>
          <p id='pub-desc'>
            Why Hasn’t the Long Island Serial Killer Case Been Solved?
          </p>
          <a
            title='Rolling Stone Article'
            id='pub-link'
            href="href='https://www.rollingstone.com/culture/culture-features/why-hasnt-the-long-island-serial-killer-case-been-solved-119604/'"
          >
            Rolling Stone
          </a>
        </div>
        <div>
          <br />
          <p id='pub-desc'>
            D.A. at center of Long Island Serial Killer case charged in dirty
            cop coverup
          </p>
          <a
            title='Crime Online Article'
            id='pub-link'
            href='https://www.crimeonline.com/2017/10/25/breaking-d-a-at-center-of-long-island-serial-killer-case-indicted-in-dirty-cop-cover-up/'
          >
            Crime Online
          </a>
        </div>
        <div>
          <img src={GilgoBeach} className='pub-img' />
          <p id='pub-desc'>
            A decade later, Suffolk County police commissioner says cops are
            'not certain' Shannan Gilbert wasn't a victim of the Long Island
            Serial Killer.
          </p>
          <a
            title='Crime Online Article'
            id='pub-link'
            href='https://www.crimeonline.com/2020/01/16/see-it-police-release-chilling-new-evidence-in-long-island-serial-killer-investigation-top-official-says-they-are-not-certain-shannan-gilbert-wasnt-a-victim/ '
          >
            Crime Online
          </a>
        </div>
        <div>
          <img src={MaureenBarnes} alt='Maureen Barnes' className='pub-img' />
          <p id='pub-desc'>
            Long Island Serial Killer victim’s sister reveals more about Maureen
            Brainard-Barnes’ mysterious disappearance
          </p>
          <a
            title='Crime Online Article'
            id='pub-link'
            href='https://www.crimeonline.com/2020/01/22/long-island-serial-killer-victims-sister-reveals-more-about-maureen-brainard-barnes-mysterious-disappearance-is-hopeful-that-new-evidence-will-lead-to-her-sisters-killer/'
          >
            Crime Online
          </a>
        </div>
        </div>
      </section>
    )
  }
  
  export default LongIsland
  