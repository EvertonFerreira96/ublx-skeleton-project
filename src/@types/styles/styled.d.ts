import 'styled-components';
import theme from '../../presentation/styles/themes/light';
declare module 'styled-components' {
    type ThemeType = typeof theme 
    export interface DefaultTheme extends ThemeType {}
}
