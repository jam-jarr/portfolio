import { useState } from 'react';
import Container from 'components/ui/Container';
import { useTheme } from 'providers/ThemeProvider';
import data, { ProjectData } from 'data/projectsData';
import Image from 'next/image';
import { Wrapper, Details, Flex, Item, Thumbnail, ViewProject } from './styles'
import ProjectModal from '../ProjectModal';

type Modal = {
  project: ProjectData | null;
  show: boolean;
}

const Portfolio = () => {
  const { theme } = useTheme();
  const [modal, setModal] = useState<Modal>({
    project: null,
    show: false,
  });


  const showModal = (project: ProjectData) => {
    setModal({ project, show: true });
  }

  return (
    <Wrapper as={Container}>
      <Details theme={theme}>
        <h1>Portfolio</h1>
        <h3>{"// Here are some of my favorite projects!"}</h3>
        <Flex>
          {data &&
            data.map((project) => (
              <Item key={project.id} onClick={() => showModal(project)}>
                {/* <h1>{project.desc}</h1> */}
                <Thumbnail>
                  <Image layout="fill" objectFit="contain" src={project.imageSrc} alt={project.imageAlt} />
                </Thumbnail>
                <ViewProject>
                  View Project
                </ViewProject>
              </Item>
            ))}
        </Flex>
        <ProjectModal
          project={modal.project}
          onHide={() => setModal({ show: false, project: null })}
          show={modal.show}
        />
      </Details>
    </Wrapper>
  );
};

export default Portfolio;