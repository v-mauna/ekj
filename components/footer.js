const Footer = () => (
  <footer id='footer'>
    <style jsx>
      {`
        #footer {
          display: relative;
          box-sizing: border-box;
          left: 0px;
          bottom: 0;
          height: 120px;
          width: 100%;
          background: black;
          color: white;
          text-align: center;
        }
        #footer:hover{
          background: rgba(0,0,0,.3)
        }
        #footerName {
          font-family: 'Arimo', sans-serif;
          font-size: 12px;
          color: white;
          font-weight: 800;
          letter-spacing: 3px;
          padding-top: 1em;
        }
        .fab {
          padding: 10px;
          font-size: 20px;
          width: 30px;
          text-align: center;
          color: white;
          margin-top: 1em;
          text-decoration: none;
          border-radius: 50%;
          margin-right: 1em;
          align-content: center;
        }

        a:hover {
          color: red;
        }
        #footerName {
          margin-top: 0;
        }
      `}
    </style>
    <div className='footer__content'>
      <div className='footer__socials'>
        <a
          className='fab fa-twitter'
          href='https://twitter.com/ellenkilloran'
        />
        <a
          className='fab fa-facebook'
          href='https://www.facebook.com/EllenKill/'
        />
        <a
          className='fab fa-instagram'
          href='https://www.instagram.com/ellenkill/'
        />
        <p id='footerName'>
          © 2020 || www.ellenkilloran.com || all rights reserved
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
