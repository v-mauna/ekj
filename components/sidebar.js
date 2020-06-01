import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <style jsx>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Arimo&family=Cormorant+Garamond&family=Julius+Sans+One&family=Spectral:wght@300&display=swap');
          .sidebar {
            margin: 0;
            width: 300px;
            height: 100%;
            flex-grow: 0;
            flex-shrink: 0;
            padding: 20px;
            text-align: left;
            display: flex;
            flex-direction: column;
            align-items: left;
          }
          #sidebar{
            height: 100%;
            postion: fixed;
          }
         #sidebar h1 {
            margin-top: 2em;
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
            transition: all ease-out 600ms;
            display: block;
            font-size: 14px;
            margin-bottom: 1em;
            margin-left: 1.5em;
            font-weight: 500;
            font-family: 'Spectral', serif;
          }
    
          #sidebar a:hover {
            color: red;
          }
          @media screen and (max-width: 700px) {
            #sidebar {
              width: 100vw;
              display: flex;
              flex-direction:row;
              position: relative;
              padding-right: 1em;

            }

            #sidebar h1,a {
              display: flex;
              flex-direction:row;
              position: relative;
              text-align:center;
              font-size: 14px;
              margin-top: 1em;
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
        <br/>
        <Link href='/about'>
          <a title='About'>About</a>
        </Link>
        <Link href='/publications'>
          <a title='Publications'>Publications</a>
        </Link>
        <Link href='/multimedia'>
          <a title='Multimedia'>Multimedia</a>
        </Link>
        <Link href='/contact'>
          <a title='Contact'>Contact</a>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
