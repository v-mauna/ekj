import JamesG from '../pages/images/JamesGandolfini.jpg'

const CultureWriting = () => {
  return (
    <section>
      <style jsx>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Arimo&family=Cormorant+Garamond&family=Julius+Sans+One&family=Spectral:wght@300&display=swap');
          
          #header {
            font-family: 'Julius Sans One', sans-serif;
            font-size: 24px;
            margin-bottom: 4%;
            font-weight: 200;
            justify-content: center;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
          #pub-desc {
            margin:20px 0 0;
            font-size: 18px;
            line-height: 1.25em;
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
            margin: 0 0 2em;
            border-bottom: 1px dashed;
          }
          #pub-link:hover {
            color:red;
          }

          .pub-img {
            height: 289px;
            margin-top: 3em;
            padding: 0;
          }
          .pub-img:hover {
            transform: scale(1.2);
            padding: 5% 0 5% 3%;
            display: block;
          }
        `}
      </style>
      <div>
        <h4 id='header'>Culture Writing</h4>
        <div>
          <p id='pub-desc'>The True Story of the Montauk Monster</p>
          <a
            title='New York Observer'
            id='pub-link'
            href='https://observer.com/2018/07/montauk-monster-true-story-gawker-richard-lawson/'
          >
            New York Observer
          </a>
        </div>
        <div>
          <p id='pub-desc'>
            Theresa Duncan and Jeremy Blake: The Suicides That ‘Launched a
            Thousand Blogs’
          </p>
          <a
            title='IBTimes Article'
            id='pub-link'
            href='http://www.ibtimes.com/theresa-duncan-and-jeremy-blake-suicides-launched-thousand-blogs-760603'
          >
            IBTimes
          </a>
        </div>
        <div>
          <p id='pub-desc'>
            Welcome To The Gunn Show: How Nicole Perlman Is Being Written Out Of
            'Guardians Of The Galaxy'
          </p>
          <a
            title='IBTimes Article'
            id='pub-link'
            href='http://www.ibtimes.com/welcome-gunn-show-how-nicole-perlman-being-written-out-guardians-galaxy-1659036'
          >
            IBTimes
          </a>
        </div>
        <div>
          <p id='pub-desc'>
            Corporate Culture Shock as Wal-Mart Hosts Film Festival Celebrating
            Diversity{' '}
          </p>
          <a
            title='Forbes Article'
            id='pub-link'
            href='https://www.forbes.com/sites/ellenkilloran/2015/05/14/corporate-culture-shock-as-wal-mart-hosts-film-festival-celebrating-diversity/#39242d8e1d56'
          >
            Forbes
          </a>
        </div>
        <div>
          <p id='pub-desc'>
          'Making a Murder' Prosecutor Ken Kratz slams popular Netflix docuseries
          </p>
          <a
            title='Maxim Article'
            id='pub-link'
            href='https://www.maxim.com/entertainment/making-a-murderer-prosecutor-ken-kratz-2015-12'>
            Maxim
          </a>
        </div>
        <div>
          <p id='pub-desc'>
          Occupy Wall Street Finds New Purpose in NYC; Old Tensions Remain </p>
          <a
            title='IBTimes Article'
            id='pub-link'
            href='http://www.ibtimes.com/occupy-sandy-occupy-wall-street-finds-new-purpose-nyc-hurricane-old-tensions-remain-887124'>
            IBTimes
          </a>
        </div>
        <div>
        <img className='pub-img' src={JamesG}/>
        <p id='pub-desc'>
        Can Tony Soprano Ever Rest In Peace?
        </p>
        <a
          title='IBTimes'
          id='pub-link'
          href='https://www.ibtimes.com/james-gandolfini-dead-can-tony-soprano-rest-peace-1318595'>
          IBTimes
        </a>
      </div>
        <div>
          <p id='pub-desc'>
          Big Love: The Gospel According to HBO
          </p>
          <a
            title='The L Magazine Article'
            id='pub-link'
            href='http://www.thelmagazine.com/2010/01/big-love-the-gospel-according-to-hbo/'>
            The L Magazine
          </a>
        </div>
        <div>
          <p id='pub-desc'>
          Cleveland Is Ready To Rock: Are You?
          </p>
          <a
            title='IBTimes Article'
            id='pub-link'
            href='https://www.ibtimes.com/cleveland-ready-rock-are-you-1462896'>
            IBTimes
          </a>
        </div>
        <div>
          <p id='pub-desc'>
          The Rise and Fall and Rise of Jenny Slate
          </p>
          <a
            title='The L Magazine'
            id='pub-link'
            href='http://www.thelmagazine.com/2011/05/the-rise-and-fall-and-rise-of-jenny-slate/'>
            The L Magazine
          </a>
        </div>
      </div>
    </section>
  )
}

export default CultureWriting