import StevenKubacki from '../photos/StevenKubacki.jpg'

const ColdDeadHands = () => {
  return (
    <section>
      <style jsx>
        {`
          #header {
            font-family: 'Spectral', serif;
            font-size: 20px;
            margin-bottom: 4%;
            font-weight: 200;
            justify-content: center;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
          #pub-desc {
            margin: 1em 0 10px 10%;
            font-size: 16px;
            line-height: 1.5em;
            width: 50%;
            letter-spacing: 1px;
            text-transform: uppercase;
            font-weight: 800;
            font-family: 'Karla', sans-serif;
          }

          #pub-link {
            text-decoration: none;
            color: black;
            font-size: 12px;
            font-style: italic;
            font-family: 'Questrial', sans-serif;
            margin: 0 0 20% 10%;
            border-bottom: 1px dashed;
          }
          #writings #pub-link:hover {
            color: rgba(0, 0, 0, 0.5);
          }

          #pub-img {
            height: 289px;
            margin-left: 10%;
          }
          #pub-img:hover{
            transform: scale(1.5);
            padding: 7.5% 0 7.5% 7.5%;
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
