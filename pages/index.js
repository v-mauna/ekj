import Home from './home'
import Layout from '../components/layout'

const Index = () => (
  <Layout>
    <div>
      <Home />
    </div>

    <style jsx global>{`
      html,
      body {
        display: block;
        padding: 0;
        margin: 0;
        width: 100%;
        margin-bottom: auto;
        box-sizing: border-box;
        overflow-y: scroll;
        overflow-x: scroll;
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
