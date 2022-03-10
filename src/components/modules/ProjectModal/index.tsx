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
  StyledScrollBars,
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
  function renderThumb ({ style, ...props }: { style: any }) {
    const thumbStyle = {
      backgroundColor: '#828489',
      width: '4px',
      borderRadius: '2px',
    };
    return (
      <div
        style={{ ...style, ...thumbStyle }}
        {...props} />
    );
  }

  function renderTrack ({ style, ...props }: { style: any }) {
    const trackStyle = {
      right: 0,
      top: '50%',
      height: '80%',
      transform: 'translate(0, -50%)',
    };
    return (
      <div
        style={{ ...style, ...trackStyle }}
        className='track-vertical'
        {...props} />
    );
  }

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
          <StyledScrollBars
            renderThumbVertical={renderThumb}
            renderTrackVertical={renderTrack}
          >
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
          </StyledScrollBars>
          <Close>
            <Image src={closeIcon} alt="Close" onClick={onHide} />
          </Close>
        </Wrapper>
      )}
    </Overlay>
  );
};

export default ProjectModal;
