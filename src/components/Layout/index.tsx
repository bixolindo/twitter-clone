import React from 'react';

import MenuBar from '../MenuBar'
import {ThemeColor} from '../../enums/themeColorEnum'
import Main from '../Main'

import SideBar from '../SideBar'

import { Container, Wrapper } from './styles';

interface Props {
  toggleTheme(themeColor : ThemeColor ) : void; 
}

const Layout: React.FC<Props> = ({ toggleTheme }) => {
  return (
      <Container>
          <Wrapper>
              <MenuBar />
              <Main />
              <SideBar toggleTheme={toggleTheme} />
          </Wrapper>
      </Container>
  );
}

export default Layout;