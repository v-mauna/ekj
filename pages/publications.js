import Head from 'next/head'
import Layout from '../components/layout'
import GilgoBeach from './Gilgo-beach-killing-leather-belt.jpg'
import MaureenBarnes from './Maureen-Brainard-Barnes.jpg'
const Publications = () => (
  <Layout>
    <div className='container'>
      <style jsx>
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

          #header {
            font-family: 'Spectral', serif;
            font-size: 20px;
            margin-bottom: 4%;
            font-weight: 200;
            justify-content: center;
            text-align: center;
            text-transform: uppercase;
            letter-spacing:2px;
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
      <Head>
        <title>Ellen Killoran || Publications</title>
        <meta name='description' content='' />
      </Head>
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
        <img src={MaureenBarnes} alt='Maureen Barnes' className='pub-img'/>
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
        <div>
          <h4 id='header'>Cold Dead Hands</h4>

          <p id='pub-desc'>The Misappearance of Steven Kubacki</p>
          <a
            title='Personal Investigative Project on Substack'
            id='pub-link'
            href='https://ellenkilloran.substack.com/p/the-misappearance-of-steven-kubacki'
          >
            Substack
          </a>
        </div>
        <div>
          <h4 id='header'>Crime Reporting</h4>
          <div>
            <p id='pub-desc'>
              Did Jennifer Hart plan to kill her family? A look back at
              allegations that followed mothers found dead with adopted children
              in fatal SUV plunge
            </p>
            <a
              title='Crime Online Article'
              id='pub-link'
              href='https://www.crimeonline.com/2018/04/14/did-jennifer-hart-plan-to-kill-her-family-a-look-back-at-allegations-that-followed-mothers-found-dead-with-adopted-children-in-fatal-suv-plunge/'
            >
              Crime Online
            </a>
          </div>
          <div>
            <p id='pub-desc'>
            Hart Family Murder-Suicide: Missing Hannah Hart may have no biological family DNA to compare to remains found near crash site

            </p>
            <a
              title='Crime Online Article'
              id='pub-link'
              href='http://www.crimeonline.com/2018/06/25/hart-family-murder-suicide-missing-hannah-hart-may-have-no-biological-family-dna-to-compare-to-remains-found-near-crash-site/'>
              Crime Online
            </a>
          </div>
          <div>
          <p id='pub-desc'>
          Who Killed Rachael DelTondo?
          </p>
          <a
            title='Inside Hook Article'
            id='pub-link'
            href='https://www.insidehook.com/article/action/killed-rachael-deltondo-rust-belt-town-ripped-apart-murder'>
            Inside Hook
          </a>
        </div>
        <div>
        <p id='pub-desc'>
        Why So Many Sex Worker Murders Go Unsolved
        </p>
        <a
          title='Rolling Stone Article'
          id='pub-link'
          href='https://www.rollingstone.com/culture/culture-features/why-so-many-sex-worker-murders-go-unsolved-126492/'>
          Rolling Stone
        </a>
      </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Publications
