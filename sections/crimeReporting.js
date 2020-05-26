import HartFamily from '../pages/images/HartFamily.jpg'

const CrimeReporting = () => {
  return (
    <section>
      <style jsx>
        {` @import url('https://fonts.googleapis.com/css2?family=Arimo&family=Cormorant+Garamond&family=Julius+Sans+One&family=Spectral:wght@300&display=swap');
        #header {
          font-family: 'Julius Sans One',sans-serif;
            font-size: 24px;
            margin-bottom: 4%;
            font-weight: 200;
            justify-content: center;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
          #pub-desc {
            margin: 1em 0 10px 10%;
            font-size: 18px;
            line-height: 1.5em;
            width: 50%;
            letter-spacing: 1px;
            font-weight: 800;
            font-family: 'Cormorant Garamond', serif;
          }

          #pub-link {
            text-decoration: none;
            color: black;
            font-size: 12px;
            font-style: italic;
            font-family: 'Cormorant Garamond', serif;
            margin: 0 0 20% 10%;
            border-bottom: 1px dashed;
          }
          #writings #pub-link:hover {
            color: rgba(0, 0, 0, 0.5);
          }

          .pub-img {
            height: 289px;
            margin-top: 0;
            margin-left: 10%;
          }
          .pub-img:hover{
            transform: scale(1.5);
            padding: 10% 0 10% 12%;
            display: block;
          }
        `}
      </style>
      <div>
        <h4 id='header'>Crime Reporting</h4>
        <div>
        <img src={HartFamily} alt='Hart Family Image' className='pub-img'/>
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
          <p id='pub-desc'>
            Hart Family Murder-Suicide: Missing Hannah Hart may have no
            biological family DNA to compare to remains found near crash site
          </p>
          <a
            title='Crime Online Article'
            id='pub-link'
            href='http://www.crimeonline.com/2018/06/25/hart-family-murder-suicide-missing-hannah-hart-may-have-no-biological-family-dna-to-compare-to-remains-found-near-crash-site/'
          >
            Crime Online
          </a>
        </div>
        <div>
          <p id='pub-desc'>Who Killed Rachael DelTondo?</p>
          <a
            title='Inside Hook Article'
            id='pub-link'
            href='https://www.insidehook.com/article/action/killed-rachael-deltondo-rust-belt-town-ripped-apart-murder'
          >
            Inside Hook
          </a>
        </div>
        <div>
          <p id='pub-desc'>Why So Many Sex Worker Murders Go Unsolved</p>
          <a
            title='Rolling Stone Article'
            id='pub-link'
            href='https://www.rollingstone.com/culture/culture-features/why-so-many-sex-worker-murders-go-unsolved-126492/'
          >
            Rolling Stone
          </a>
        </div>
      </div>
    </section>
  )
}

export default CrimeReporting
