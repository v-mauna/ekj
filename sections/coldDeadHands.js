import StevenKubacki from '../pages/images/StevenKubacki.jpg'

const ColdDeadHands = () => {
  return (
    <section>
      <style jsx>
        {` @import url('https://fonts.googleapis.com/css2?family=Arimo&family=Cormorant+Garamond&family=Julius+Sans+One&family=Spectral:wght@300&display=swap');
        #header {
          font-family: 'Julius Sans One',sans-serif;
            font-size: 24px;
            margin-bottom: 4%;
            font-weight: 200;
            justify-content: center;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
          #pub-desc {
            margin: 1em 0 10px;
            font-size: 18px;
            line-height: 1.5em;
            width: 50%;
            letter-spacing: 1px;
            font-weight: 800;
            font-family: 'Cormorant Garamond', serif;
          }

          #pub-link {
            text-decoration: none;
            color: black;
            font-size: 12px;
            font-style: italic;
            font-family: 'Cormorant Garamond', serif;
            margin: 0 0 20%;
            border-bottom: 1px dashed;
          }
          #pub-link:hover {
            color: red;
          }

          #pub-img {
            height: 289px;
          }
          #pub-img:hover{
            transform: scale(1.25);
            padding: 5% 0 5% 6%;
            display: block;
          }
        `}
      </style>
      <div>
        <h4 id='header'>Cold Dead Hands</h4>
        <div id='images'>
          <img
            src={StevenKubacki}
            alt='Steven Kubacki Newspaper Clipping'
            id='pub-img'
          />
        </div>
        <p id='pub-desc'>The Misappearance of Steven Kubacki</p>
        <a
          title='Personal Investigative Project on Substack'
          id='pub-link'
          href='https://ellenkilloran.substack.com/p/the-misappearance-of-steven-kubacki'
        >
          Substack
        </a>
      </div>
    </section>
  )
}

export default ColdDeadHands
