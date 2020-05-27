import Head from 'next/head'
import Link from 'next/link'
import Headshot from './images/EKHeadshot.jpg'
import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <div id='wrapper'>
      <div className='container'>
        <style jsx>
          {`
            #wrapper {
              display: block;
            }

            .container {
              display: flex;
              flex-direction: column;
              box-sizing: border-box;
              margin-left: 25%;
              margin-top: -20%;
              font-size: 16px;
              width: 80vw;
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
            #contact-img {
              width: 30%;
              padding-top: 2em;
              padding-bottom: 2em;
              align-content: center;
              justify-content: center;
              align-self: center;
            }
            a {
              text-decoration: none;
              color: black;
            }

            #contact-info {
              position: absolute;
              top: 30%;
              left: 50%;
            }
            #tipsEmail {
              font-size: 22px;
              text-transform: lowercase;
              line-height: 1em;
              letter-spacing: 1px;
            }
            #email {
              text-transform: uppercase;
              letter-spacing: 3px;
              font-family: 'Spectral', serif;
            }
            .contact-socials {
              margin-left: 40%;
            }

            .fab {
              padding: 10px;
              font-size: 20px;
              width: 30px;
              text-align: center;
              color: black;
              text-decoration: none;
              border-radius: 50%;
              margin-right: 1em;
              align-content: center;
            }
            .fab:hover {
              background: black;
              color: white;
            }
           
            }
          `}
        </style>
        <Head>
          <script
            src='https://kit.fontawesome.com/6f92a9206c.js'
            crossorigin='anonymous'
          ></script>
          <title>Ellen Killoran || Contact</title>
        </Head>
        <div>
          <img src={Headshot} id='contact-img' />
        </div>
        <div id='contact-info'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='mailto:ekilloran@crimeonline.com'
          >
            <p id='email'>ekilloran@crimeonline.com</p>
          </a>

          <div>
            {' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='mailto:EllenKilloran@protonmail.com'
            >
              <p id='email'>EllenKilloran@protonmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact
