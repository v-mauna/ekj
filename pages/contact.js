import Head from 'next/head'
import Link from 'next/link'
import Headshot from './images/EKHeadshot.jpg'
import Layout from '../components/layout'

const Contact = () => (
  <Layout>
      <div className='container'>
        <style jsx>
          {`
            .container {
              display: flex;
              flex-direction: column;
              flex-wrap: wrap;
              box-sizing: border-box;
              font-size: 16px;
              width: calc(100%-${'200px'};)
              line-height: 2em;
              text-align: left;
              margin-top: 2em;
              margin-bottom: 100px;
            }
            p {
              font-family: 'Spectral', serif;
              font-weight: 500;
              width: 80%;
            }
  
            a {
              text-decoration: none;
              color: black;
            }
            #contact-img{
              width: 300px;
            }
            #email {
              text-transform: uppercase;
              letter-spacing: 3px;
              font-family: 'Spectral', serif;
            }
            
            @media(max-width:700px){
              .container {
                display: flex;
                flex-direction: column;
                align-content: left;
                font-size: 14px;
                margin-bottom: 100px;
               }
              #contact-img{
                display: flex;
                flex-direction: column;
                left: 20px;
                width: 200px;
                
              }
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
          <div id='contact-info'>
          <img src={Headshot} alt='Ellen Killoran Headshot' id='contact-img'/>
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
  </Layout>
)

export default Contact
