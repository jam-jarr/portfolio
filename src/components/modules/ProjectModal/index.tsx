import { ProjectData } from 'data/projectsData';
import { Thumbnail } from '../Portfolio/styles';
import { Close, Details, Overlay, ProjectImage, Wrapper, Tag, Tags, About, DetailsWrapper } from './styles';
import closeIcon from 'assets/icons/close.svg';
import Image from 'next/image';

type ModalProps = {
  project: ProjectData | null;
  onHide: () => void;
  show: boolean;
}

const ProjectModal = ({ project, onHide, show }: ModalProps) => {
  return (
    <Overlay show={show}>
      {show &&
        <Wrapper show={show}>
          <ProjectImage>
            <Thumbnail>
              <Image layout="fill" objectFit="contain" src={project!.imageSrc} alt={project!.imageAlt} />
            </Thumbnail>
          </ProjectImage>
          <DetailsWrapper>
            <Details>
              <h1>{project!.title}</h1>
              <Tags>
                {
                  project!.tags.map((tag, index) => (
                    <Tag key={index}><span>{tag.toUpperCase()}</span></Tag>
                  ))
                }
              </Tags>
              <About>
                <h3>About</h3>
                {project!.desc}
              </About>
            </Details>
          </DetailsWrapper>
          <Close >
            <Image src={closeIcon} alt="Close" onClick={onHide} />
          </Close>
        </Wrapper>
      }
    </Overlay>
  );
};

export default ProjectModal;
