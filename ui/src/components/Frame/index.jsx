import React, { useCallback, useState } from 'react';
import { CustomersMajor, CashDollarMajor } from '@shopify/polaris-icons';
import { Frame, TopBar, Navigation } from '@shopify/polaris';
import { useLocation } from 'react-router-dom';

const AppFrame = ({ children }) => {
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  const location = useLocation();

  const toggleMobileNavigationActive = useCallback(
    () => setMobileNavigationActive(active => !active),
    []
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );

  const navigationMarkup = (
    <>
      <Navigation location={location.pathname}>
        <Navigation.Section
          items={[
            {
              label: 'Customers',
              icon: CustomersMajor,
              selected: location.pathname.startsWith('/customers'),
              url: '/customers',
            },
          ]}
        />
        <Navigation.Section
          items={[
            {
              label: 'Transfers',
              icon: CashDollarMajor,
              selected: location.pathname.startsWith('/transfers'),
              url: '/transfers',
            },
          ]}
        />
      </Navigation>
    </>
  );

  return (
    <Frame
      topBar={topBarMarkup}
      navigation={navigationMarkup}
      showMobileNavigation={mobileNavigationActive}
      onNavigationDismiss={toggleMobileNavigationActive}
    >
      {children}
    </Frame>
  );
};

export default AppFrame;
