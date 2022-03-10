import { ProjectData } from 'data/projectsData';
import {
  Close,
  Details,
  Overlay,
  ProjectImage,
  Wrapper,
  Tag,
  Tags,
  About,
  DetailsWrapper,
  StyledButton,
  Buttons,
  ButtonsWrapper,
  Thumbnail,
  Link,
} from './styles';
import closeIcon from 'assets/icons/close.svg';
import ViewCode from 'components/ui/Icons/ViewCode';
import Image from 'next/image';
import DemoIcon from 'components/ui/Icons/DemoIcon';

type ModalProps = {
  project: ProjectData | null;
  onHide: () => void;
  show: boolean;
};

const ProjectModal = ({ project, onHide, show }: ModalProps) => {
  return (
    <Overlay show={show}>
      {show && (
        <Wrapper show={show}>
          <ProjectImage>
            <Thumbnail>
              <Image
                layout="fill"
                objectFit="contain"
                src={project!.imageSrc}
                alt={project!.imageAlt}
              />
            </Thumbnail>
            <ButtonsWrapper>
              <Buttons>
                <StyledButton disabled={!project!.codeLink}>
                  <ViewCode />
                  <Link
                    href={project!.codeLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    CODE
                  </Link>
                </StyledButton>
                <StyledButton disabled={!project!.demoLink}>
                  <DemoIcon />
                  <Link
                    href={project!.demoLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    DEMO
                  </Link>
                </StyledButton>
              </Buttons>
            </ButtonsWrapper>
          </ProjectImage>
          <DetailsWrapper>
            <Details>
              <h1>{project!.title}</h1>
              <Tags>
                {project!.tags.map((tag, index) => (
                  <Tag key={index}>
                    <span>{tag.toUpperCase()}</span>
                  </Tag>
                ))}
              </Tags>
              <About>
                <h3>About</h3>
                <p>{project!.desc}</p>
              </About>
            </Details>
          </DetailsWrapper>
          <Close>
            <Image src={closeIcon} alt="Close" onClick={onHide} />
          </Close>
        </Wrapper>
      )}
    </Overlay>
  );
};

export default ProjectModal;
