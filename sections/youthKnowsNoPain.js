import ReactPlayer from 'react-player'

const Trailer = () => (
  <div>
    <style jsx>
      <link
        href='https://fonts.googleapis.com/css2?family=Arimo&family=Jost:ital,wght@0,400;1,200&family=Karla&family=Spectral&display=swap'
        rel='stylesheet'
      />
      {`
        p {
          margin: 1em 0 10px;
          font-size: 18px;
          line-height: 1.5em;
          letter-spacing: 1px;
          font-weight: 800;
          font-family: 'Cormorant Garamond', serif;
        }
      `}
    </style>
    <iframe title='Youth Knows No Pain Trailer' width="620" height="315" src="https://www.youtube.com/embed/2pJCSnjHa4Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
   
  </div>
)

export default Trailer
