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
              color: black;
              line-height: 2em;
            }

            #contact-img{
              width: 300px;
              display: flex;
              margin: 0;
              padding: 0;
            }
            #photo-credit{
              font-size: 10px;
              text-align: left;
              position: absolute;
              top: 480px;
              font-family: 'Arial',sans-serif;
              text-transform: uppercase;
              margin-bottom: 20px;
              color: #5c677d;
            }
            #contact-info{
              padding: 2em;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-content: center;
            }

            #contact-info h4{
              font-family: 'Arimo', sans-serif;
              text-transform: uppercase;
              font-weight: 800;
              letter-spacing: 3px;
            }
            #contact-info a:hover{
              color: red;
              font-style: italic; 
              transform: translate(0,-10%);           
            }
            
            @media(max-width:700px){
              .container {
                display: flex;
                flex-direction: row;
                align-content: left;
                font-size: 14px;
                margin-bottom: 100px;
               }
              #contact-img{
                display: flex;
                flex-direction: column;
                padding: 1em;
                width: 200px;
                height: 392px;
                margin-bottom: 0;
              }

              #photo-credit{
                top: 85%;
                margin-left: 2em;
                font-size: .5em;
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
      <span id='photo-credit'>Alex Tween</span>
      <div id='contact-info'>
        <h4>Contact</h4>
        <p>
          Send your tips and story ideas to
          <a target='_blank' title='e-mail' rel='noopener' href='mailto:ekilloran@gmail.com'>
            {' '}ekilloran@gmail.com
          </a>
        </p>

        <h4>Follow</h4>
        <p>
         <a href='https://www.instagram.com/ellenkill/'>instagram</a><br/>
        <a href='https://www.facebook.com/EllenKill/'>facebook</a><br/>
        <a href='https://twitter.com/ellenkilloran'>twitter</a><br/></p>
       
      </div>
    </div>
  </Layout>
)

export default Contact
