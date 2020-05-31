import Link from 'next/link'

const Navbar = () => {
  return (
    <sidebar>
      <style jsx>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Arimo&family=Cormorant+Garamond&family=Julius+Sans+One&family=Spectral:wght@300&display=swap');
          sidebar {
            margin-bottom: auto;
            display: flex;
            flex-direction: column;
            width: 200px;
            margin-left: 1em;
          }
         #sidebar h1 {
            margin-top: 2.5em;
            letter-spacing: 6px;
            font-style: bold;
            font-size: 24px;
            font-family: 'Arimo', sans-serif;
            text-transform: uppercase;
            font-weight: 800;
          }
          #sidebar a {
            text-decoration: none;
            color: black;
            display: block;
            font-size: 14px;
            margin-bottom: 1em;
            font-weight: 500;
            font-family: 'Spectral', serif;
          }
    
          #sidebar a:hover {
            color: red;
          }
          @media screen and (max-width: 700px) {
            #sidebar {
              width: 100vw;
              height: auto;
              display: flex;
              flex-direction:row;
              position: relative;

            }

            #sidebar h1,a {
              text-align:center;
              margin: 1em 1em 0 0;
            }
            div.content {
              margin-left: 0;
            }
          }
          

          }
        `}
      </style>
      <div id='sidebar'>

          <Link href='/'>
            <a id='link' title='Home'>
              <h1>Ellen Killoran</h1>
            </a>
          </Link>{' '}

          <Link href='/about'>
            <a title='About'>
              About
            </a>
          </Link>
          <Link href='/publications'>
            <a title='Publications'>
              Publications
            </a>
            </Link>
            
          <Link href='/multimedia'>
            <a title='Multimedia'>
              Multimedia
            </a>
          </Link>
        <Link href='/contact'>
            <a title='Contact'>
              Contact
            </a>
          </Link>
          </div>
    </sidebar>
  )
}

export default Navbar
