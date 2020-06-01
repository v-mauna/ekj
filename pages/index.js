import Home from './home'
import Layout from '../components/layout'

const Index = () => (
  <Layout>
    <Home />
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        width: 100%;
        margin-bottom: auto;
        box-sizing: border-box;
        overflow-y: scroll;
        overflow-x: scroll;
        flex-grow: 1;
        flex-shrink: 1;
      }
      *,
      *:before,
      *:after {
        box-sizing: inherit;
        margin-left: 0;
        margin-top: 0;
      }
      }
    `}</style>
  </Layout>
)

export default Index
