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
          nav {
            margin-bottom: auto;
            display: block;
            width: 20%;
          }
          #topNav {
            font-size: 14px;
            list-style: none;
            display: flex;
            text-align: left;
            flex-direction: column;
            width: 20%;
            margin-top: 0;
          }
          #name {
            margin-top: 2.5em;
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
      <ul id='topNav'>
        <li>
          <Link href='/'>
            <a id='link' title='Home'>
              <h1 id='name'>Ellen Killoran</h1>
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
          <Link href='/publications'>
            <a id='link' title='Publications'>
              Publications
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
    </nav>
  )
}

export default Navbar
