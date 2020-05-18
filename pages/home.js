import Head from 'next/head'

const Home = () => (
  <div className='container'>
    <style jsx>
      <link
        href='https://fonts.googleapis.com/css2?family=Arimo&family=Jost:ital,wght@0,400;1,200&family=Karla&family=Spectral&display=swap'
        rel='stylesheet'
      />
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
        p {
          font-family: 'Spectral', serif;
          font-weight: 550;
        }
      `}
    </style>
    <Head>
      <title>Ellen Killoran</title>
    </Head>
    <p>
      Ellen is a seasoned journalist and former media & entertainment reporter
      with a taste for true crime. Formerly a senior editor at IBTimes, her work
      has appeared in Forbes, Rolling Stone, Maxim, NYMag, Indiewire, and more.
      She co-produced the HBO documentary "Youth Knows No Pain" and appeared in
      a documentary series that aired alongside the Lifetime movie "Manson's
      Lost Girls." Tips: ekilloran@crimonline.com
    </p>
  </div>
)

export default Home
