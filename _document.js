import Document, { HTML, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <HTML lang='en'>
        <Head>
        <script src="https://kit.fontawesome.com/6f92a9206c.js" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Arimo&family=Cormorant+Garamond&family=Julius+Sans+One&family=Spectral:wght@300&display=swap" rel="stylesheet"/>
           <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <meta name="theme-color" content="black"/>
          <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
          <meta
            name='description'
            content="Ellen Killoran, crime reporter published in Forbes, Rolling Stone, Maxim, NYMag, Indiewire and more, personal website. She 
            co-produced the HBO Documentary 'Youth Knows No Pain' and appeared in the documentary series that aired alongside the Lifetime Movie 'Manson's Lost Girls'. "
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
         
        </body>
      </HTML>
    )
  }
}

export default MyDocument
