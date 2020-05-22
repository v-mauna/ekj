import Head from 'next/head'
import Link from 'next/link'
import Headshot from '../photos/EKHeadshot.jpg'
import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <div className='container'>
      <style jsx>
        {`
          .container {
            position: absolute;
            left: 25%;
            top: 20%;
            margin-left: 2em;
            font-size: 16px;
            width: 50vw;
            line-height: 2em;
            justify-content: center;
            align-content: center;
            text-align: center;
          }
          a {
            text-decoration: none;
            color: black;
          }
          #contact-img{
            width: 50%;
            margin-left: -35%;
            margin-top: -10%;
          }
          #tipsEmail {
            font-family: 'Spectral', serif;
            font-weight: 550;
            font-size: 22px;
            text-transform: lowercase;
            line-height: 2em;
            letter-spacing: 3px;
          }
          #email {
            text-transform: uppercase;
            letter-spacing: 6px;
            font-weight: 800;
            font-family: 'Karla', sans-serif;
          }
        `}
      </style>
      <Head></Head>
      <div>
      <img src={Headshot} id='contact-img'/>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='mailto:ekilloran@crimeonline.com'
        >
          <p id='email'>ekilloran@crimeonline.com</p>
        </a>
        <p id='tips'>tips</p>
      </div>
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
  </Layout>
)

export default Contact
