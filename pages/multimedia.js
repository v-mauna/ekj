import Head from 'next/head'
import Layout from '../components/layout'
import ReactPlayer from "react-player";
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
        .wrapper{
          display: block;
          
        }
          .container {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            margin-left: 25%;
            margin-top: -20%;
            margin-bottom: 20%;
            font-size: 16px;
            width: 50vw;
            line-height: 2em;
            justify-content: center;
            align-content: center;
            text-align: left;
          }
          p {
            font-family: 'Spectral', serif;
            font-weight: 500;
            width: 80%;
            margin-left: 10%;
            margin-bottom: 10%;
          }
          img {
            width: 50vw;
            height: 50%;
            align-content: center;
            justify-content: center;
            align-self: center;
          }
        `}
      </style>
      <Head>
        <title>Ellen Killoran || About</title>
      </Head>
      <ReactPlayer url="https://www.youtube.com/watch?v=2pJCSnjHa4Q"/>
     </div>
    </div>
  </Layout>
)

export default Multimedia
