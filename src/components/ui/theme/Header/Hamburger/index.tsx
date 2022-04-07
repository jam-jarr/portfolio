import { Wrapper, Bar } from './styles';

type HamburgerProps = {
  sidebar?: boolean;
  toggle: (value: boolean) => void;
};

const Hamburger = ({ sidebar, toggle }: HamburgerProps) => {
  return (
    <Wrapper onClick={() => toggle(!sidebar)}>
      <Bar top sidebar={sidebar} />
      <Bar mid sidebar={sidebar} />
      <Bar bottom sidebar={sidebar} />
    </Wrapper>
  );
};

export default Hamburger;
