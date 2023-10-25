import Layout from './Layout/Layout';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
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
