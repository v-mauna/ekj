import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <HTML lang='en'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Arimo&family=Jost:ital,wght@0,400;1,200&family=Karla&family=Spectral&display=swap'
            rel='stylesheet'
          />
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
          />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
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
