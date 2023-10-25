import Layout from './Layout/Layout';
import Header from './Layout/Header/Header';
import Main from './Layout/Main/Main';
import Footer from './Layout/Footer/Footer';
import { Provider } from 'react-redux';


function App() {

  return (
    <>
        <Provider store={store}>
            <Layout>
                <Header />
                <Main />
                <Footer />
            </Layout>
        </Provider>
    </>
  )
}

export default App
