import ReactAudioPlayer from 'react-audio-player'

const BreakingDown2 = () =>(
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
      #audio-2 {
        width: 20%;
      }
    `}
  </style>

  <p>
    Breaking Down - Part Two
    <a
      onClick={() =>
        (document.getElementById('audio-2').style.display = 'block')
      }
    >
      <i className='far fa-play-circle' />
      <ReactAudioPlayer
        id='audio-2'
        src='https://ellenkilloran.s3.amazonaws.com/Break+Down+(3-15)+Ellen+Kiloran+Pt+2+(1).mp3'
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

export default BreakingDown2