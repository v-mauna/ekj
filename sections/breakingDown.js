import ReactAudioPlayer from 'react-audio-player'

const BreakingDown = () =>(
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
        font-weight: 500;
        font-family: 'Cormorant Garamond', serif;
      }
      .fas,
      .far, .fab{
        margin-left: 12px;
        color: black;
      }
      .fas: hover {
        color: red;
      }
      #audio,
      #audio-2 {
        width: 20%;
      }
    `}
  </style>
    <p>
      Breaking it Down: The Long Island Serial Killer Case (Part One)
      <a
        onClick={() =>
          (document.getElementById('audio').style.display = 'block')
        }
      >
        <i className='far fa-play-circle' />
        <ReactAudioPlayer
          id='audio'
          src='https://ellenkilloran.s3.amazonaws.com/BreakDown-Pt1.mp3'
          controls
          style={{
            width: '300',
            backgroundColor: 'black',
            marginLeft: 0,
            display: 'none',
          }}
        />
      </a>
    </p>
  </div>
)

export default BreakingDown