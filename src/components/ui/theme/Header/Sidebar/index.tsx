import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

type SideBarProps = {
  sidebar?: boolean;
  toggle: () => void;
};

const Sidebar = ({ sidebar, toggle }: SideBarProps) => {
  return (
    <Wrapper active={sidebar} onClick={toggle} >
      <NavbarLinks />
    </Wrapper>
  );
};

export default Sidebar;
