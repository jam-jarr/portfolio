import Layout from 'components/ui/Layout';
import Footer from 'components/ui/theme/Footer';
import Portfolio from 'components/modules/Portfolio';
import Header from 'components/ui/theme/Header';
import Content from 'components/ui/Content';

const ProjectsPage = () => (
  <Layout>
    <Content>
      <Header />
      <Portfolio />
    </Content>
    <Footer />
  </Layout>
);

export default ProjectsPage;
