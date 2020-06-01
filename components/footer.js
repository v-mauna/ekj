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
          min-width: 100vw;
          background: black;
          color: white;
          padding: 1em;
          text-align: center;
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
          font-size: 18px;
          width: 30px;
          text-align: center;
          color: white;
          text-decoration: none;
          border-radius: 50%;
          margin-right: 1em;
          align-content: center;
        }


        a:hover{
          color: red;
          transform: translate(0,-10%);
        }
        #footerName {
          margin-top: 0;
        }
        @media(max-width:700px){
          #footer{
            width: 100vw;
          }
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
          className='fab fa-facebook-f'
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
