import { ProjectData } from 'data/projectsData';
import { Close, Details, Overlay, ProjectImage, Wrapper, Tag, Tags, About, DetailsWrapper, StyledButton, Buttons, ButtonsWrapper, Thumbnail } from './styles';
import closeIcon from 'assets/icons/close.svg';
import ViewCode from 'components/ui/Icons/ViewCode';
import Image from 'next/image';
import DemoIcon from 'components/ui/Icons/DemoIcon';

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
            <ButtonsWrapper>
              <Buttons>
                <StyledButton>
                  <ViewCode />
                  CODE
                </StyledButton>
                <StyledButton>
                  <DemoIcon />
                  DEMO
                </StyledButton>
              </Buttons>
            </ButtonsWrapper>
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
