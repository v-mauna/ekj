import Home from './home'
import Layout from '../components/layout'
import Articles from './articles'
const Index = () => (
  <Layout>
    <div>
      <Home />
    </div>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
      }
      * {
        box-sizing: border-box;
      }
    `}</style>
  </Layout>
)

export default Index
