import Head from 'next/head'
import Link from 'next/link'
import Headshot from '../photos/EKHeadshot.jpg'
import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <div className='contact'>
      <div className='container'>
        <style jsx>
          {`
            .contact {
              display: block;
              min-height: 100vh;
              padding: 0;
              margin-bottom: auto;
            }
            .container {

              position: absolute;
              left: 25%;
              margin-left: 2em;
              font-size: 16px;
              width:72vw;
              top: 10%;
              line-height: 1em;
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
            #contact-img {
              width: 40%;
              height: 50%;
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
              top: 40%;
              left: 40%;
            }
            #tipsEmail {
              font-size: 22px;
              text-transform: lowercase;
              line-height: 1em;
              letter-spacing: 2px;
            }
            #email {
              text-transform: uppercase;
              letter-spacing: 6px;

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
            <div className='contact-socials'>
              <a href='https://www.instagram.com/ellenkill/'>
                <i className='fab fa-instagram' />
              </a>
              <a href='https://twitter.com/ellenkilloran'>
                <i className='fab fa-twitter' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact
