import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      twitter: string;
      lighthover: string;
      darkhover: string;
    }
  }
}