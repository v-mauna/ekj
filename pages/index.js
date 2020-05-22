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
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0;
        margin-bottom: auto;
        box-sizing: border-box;
      }
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
      }
    `}</style>
  </Layout>
)

export default Index
