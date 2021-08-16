import { ThemeProvider } from 'styled-components';
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import { BrowserRouter } from 'react-router-dom';

import PolarisStyles from 'styles/polaris';
import baseTheme from 'styles/theme';
import GlobalStyles from 'styles/global';
import Routes from 'Routes';

const GBLogo =
  'https://groundbreaker.co/wp-content/uploads/2019/06/logox1-opt.png';

function App() {
  const appTheme = {
    colors: {
      ...baseTheme.colors,
    },
    logo: {
      width: 200,
      topBarSource: GBLogo,
      contextualSaveBarSource: GBLogo,
      url: '/',
      accessibilityLabel: 'Company logo',
    },
  };

  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles />
      <PolarisStyles />
      <AppProvider i18n={enTranslations} theme={appTheme}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
