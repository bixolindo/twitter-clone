import React from 'react';
import StickyBox from 'react-sticky-box'

import {ThemeColor} from '../../enums/themeColorEnum'
import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'
import ThemeSelector from '../ThemeSelector'

import { Container, SearchWrapper, SearchInput, SearchIcon, Body} from './styles';

interface Props {
  toggleTheme(themeColor : ThemeColor ) : void; 
}

const SideBar: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
        <List 
          title="Talvez você curta"
          elements={[
            <FollowSuggestion name = "Nabil Duarte" nickname = "@fandodino" />,
            <FollowSuggestion name = "Matheus Silva" nickname = "@matheuscomcincos" />,
            <FollowSuggestion name = "Paulo Ozeia" nickname = "@pardaldejava" />
          ]}
        />
          <List 
           title="Escolha um tema "
           elements={[<ThemeSelector toggleTheme={toggleTheme} />]}
         />
        <List 
          title="Talvez você curta"
          elements={[<News />,<News />,<News />]}
        />
        <List 
          title="Talvez você curta"
          elements={[<News />,<News />,<News />]}
        />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;