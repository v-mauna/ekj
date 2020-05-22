const Footer = () => (
  <footer id='footer'>
    <style jsx>
      {`
        #footer {
          display: absolute;
          box-sizing: border-box;
          left: 0px;
          bottom: 0;
          height: 100px;
          width: 100%;
          background: #0001;
          color: black;
          text-align: center;
        }

        #footerName {
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
          color: black;
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
        <a className='fa fa-twitter' href='https://twitter.com/ellenkilloran' />
        <a
          className='fa fa-facebook'
          href='https://www.facebook.com/Snipcart/'
        />
        <a
          className='fas fa-instagram'
          href='https://www.instagram.com/ellenkill/'
        />
        <p id='footerName'>ellenkilloran.com © 2020</p>
      </div>
    </div>
  </footer>
)

export default Footer
