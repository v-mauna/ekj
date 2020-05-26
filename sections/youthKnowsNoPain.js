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
          margin: 1em 0 10px 10%;
          font-size: 18px;
          line-height: 1.5em;
          letter-spacing: 1px;
          font-weight: 800;
          font-family: 'Cormorant Garamond', serif;
        }
        .fas,
        .far,
        .fab {
          margin-left: 12px;
          color: black;
        }
        .fas: hover {
          color: red;
        }
        #audio-2 {
          width: 20%;
        }
      `}
    </style>
        
    <ReactPlayer
      id='video'
      style={{ display: 'block', marginLeft: '10%', marginTop: '1em' }}
      url='https://www.youtube.com/watch?v=2pJCSnjHa4Q'
    />
  </div>
)

export default Trailer
