const Footer = () => (
  <footer className='footer'>
    <style jsx>
      <link
        href='https://fonts.googleapis.com/css2?family=Arimo&family=Jost:ital,wght@0,400;1,200&family=Karla&family=Spectral&display=swap'
        rel='stylesheet'
      />
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
      />
      {`
        .footer {
          height: 15vh;
          justify-content: center;
          align-content: center;
          text-align: center;
          width: 100vw;
        }

        #footerName{
          font-family: 'Arimo', sans-serif;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 3px;
          padding-top: 1em;
        }
        .fa {
          padding: 14px;
          font-size: 20px;
          width: 40px;
          text-align: center;
          text-decoration: none;
          border-radius: 50%;
          color:black;
          margin-right: 1em;
          align-content: center;
        }
        a:hover{
          color: white;
          background: black;
        }
        #footerName{
          margin-top: 0;
        }

      `}
    </style>
    <div className='footer__content'>
      <div id='footer__copyright'></div>
      <div className='footer__socials'>
        <a className='fa fa-twitter' href='https://twitter.com/ellenkilloran'/>
        <a className='fa fa-facebook'href='https://www.facebook.com/Snipcart/'/> 
        <a className='fa fa-instagram' href='https://www.instagram.com/ellenkill/'/>
        <p id='footerName'>ellenkilloran.com © 2020</p> 
      </div>
    </div>
  </footer>
)

export default Footer
