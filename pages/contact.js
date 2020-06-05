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
              flex-direction: row;
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
              display: flex;
              margin: 0;
              padding: 0em;
            }
            #contact-info{
              padding: 1em;
              justify-content: center;
              align-content: center;
              align-items: center;
                  
            }
            #contact-info h4{
              font-family: 'Arimo', sans-serif;
              text-transform: uppercase;
              font-weight: 800;
              letter-spacing: 3px;
            }
            #email {
              position: relative;
              letter-spacing: 3px;
              border: 1px solid black;
              padding: 1em;
              width: 60px;
              text-align:center;
              align-content:center;
              justify-content: center;
              
            }
            #email:hover{
              color: rgba(0,0,.3,.3);
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
      <img src={Headshot} alt='Ellen Killoran Headshot' id='contact-img' />
      <div id='contact-info'>
        <h4>Contact</h4>
        <p>Send your tips and story ideas to: </p>
        <a
          target='_blank'
          rel='noopener'
          href='mailto:ekilloran@gmail.com'
        >
          <p id='email'>e-mail</p>
        </a>
      </div>
    </div>
  </Layout>
)

export default Contact
