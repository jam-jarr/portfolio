import Intro from 'components/modules/Intro';
import Content from 'components/ui/Content';
import Layout from 'components/ui/Layout';
import Footer from 'components/ui/theme/Footer';
import Header from 'components/ui/theme/Header';

const HomePage = () => (
  <Layout>
    <Content>
      <Header />
      <Intro />
    </Content>
    <Footer />
  </Layout>
);

export default HomePage;
