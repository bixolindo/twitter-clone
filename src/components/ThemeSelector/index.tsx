import React from 'react';
import { ThemeColor } from '../../enums/themeColorEnum';
import { Container, ThemeOptions } from './styles';

interface Props {
  toggleTheme(themeColor : ThemeColor ) : void; 
}

const ThemeSelector: React.FC<Props> = ({ toggleTheme }) => {

  const buildOptions = () =>{
    let keys = Object.keys(ThemeColor);
    let colors  = keys.filter((element : any)  => isNaN(element) === true )
    const ThemeArray : ThemeColor[] = [ThemeColor.BLUE,ThemeColor.GREEN, ThemeColor.YELLOW, ThemeColor.ORANGE, ThemeColor.PURPLE, ThemeColor.PINK ];
    return (
      (ThemeArray.map((key : ThemeColor ) => <ThemeOptions onClick={() => toggleTheme(key)} className={colors[key].toLowerCase()} /> )
    ))
  }
  return (
    <Container>
      {buildOptions()}
    </Container>
  );
}

export default ThemeSelector;