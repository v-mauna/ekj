import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <style jsx>
        <link
          href='https://fonts.googleapis.com/css2?family=Arimo&family=Jost:ital,wght@0,400;1,200&family=Karla&family=Spectral&display=swap'
          rel='stylesheet'
        />
        {`
          #topNav {
            font-size: 14px;
            color: white;
            list-style: none;
            display: flex;
            text-align: left;
            flex-direction: column;
            width: 20%;
            height: 70vh;
            margin-top: 0;
          }
          #name {
            margin: 2.5em 1em 0 2em;
            letter-spacing: 6px;
            width: 20%;
            font-family: 'Arimo', sans-serif;
            text-transform: uppercase;
            font-weight: 800;
          }
          li {
            margin: 1em;
          }

          a {
            text-decoration: none;
            color: black;
            font-weight: 500;
            font-family: 'Spectral', serif;
          }
          a:hover {
            color: red;
          }
        `}
      </style>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
      />
      <div className='navBar'>
        <h1 id='name'>Ellen Killoran</h1>
        <ul id='topNav'>
          <li>
            <Link href='/'>
              <a id='link' title='Home'>
                Home
              </a>
            </Link>{' '}
          </li>
          <li>
            <Link href='/about'>
              <a i='link' title='About'>
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href='/articles'>
              <a id='link' title='Articles'>
                Articles
              </a>
            </Link>{' '}
          </li>
          <li>
            <Link href='/contact'>
              <a id='link' title='Contact'>
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
