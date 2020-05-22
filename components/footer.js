const Footer = () => (
  <footer id='footer'>
    <style jsx>
      {`
        #footer {
          display: relative;
          box-sizing: border-box;
          left: 0px;
          bottom: 0;
          height: 130px;
          width: 100%;
          background: #0002;
          color: white;
          text-align: center;
        }

        #footerName {
          font-family: 'Arimo', sans-serif;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 3px;
          padding-top: 1em;
        }
        .fab {
          padding: 10px;
          font-size: 20px;
          width: 30px;
          text-align: center;
          color: black;
          margin-top: 1em;
          text-decoration: none;
          border-radius: 50%;
          margin-right: 1em;
          align-content: center;
        }

        a:hover {
          color: white;
          background: black;
        }
        #footerName {
          margin-top: 0;
        }
      `}
    </style>
    <div className='footer__content'>
      <div className='footer__socials'>
        <a className='fab fa-twitter' href='https://twitter.com/ellenkilloran' />
        <a
          className='fab fa-facebook'
          href='https://www.facebook.com/Snipcart/'
        />
        <a
          className='fab fa-instagram'
          href='https://www.instagram.com/ellenkill/'
        />
        <p id='footerName'>ellenkilloran.com © 2020</p>
      </div>
    </div>
  </footer>
)

export default Footer
