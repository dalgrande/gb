import { createGlobalStyle, css } from 'styled-components';
import '@shopify/polaris/dist/styles.css';

export const polarisModifiers = {
  frame: theme => css`
    /* Hack to get the footer always sticky at the bottom */
    .Polaris-Frame__Content {
      display: flex;
      flex-direction: column;
      > :first-child {
        flex: 1;
      }
    }

    .Polaris-Frame {
      background-color: ${theme.colors.grayBackground};
    }
  `,
  resourceList: () => css`
    .Polaris-ResourceList__ItemWrapper--isLoading {
      min-height: 30rem;
    }

    .Polaris-ResourceList__SpinnerContainer {
      padding-top: 0 !important;
      align-items: center;
    }

    .Polaris-ResourceItem__Owned {
      .Polaris-ResourceItem__Handle {
        margin-top: auto;
      }
    }
  `,
  page: () => css`
    .Polaris-Page {
      width: 100%;
      flex: 1;
    }
  `,
  popover: () => css`
    div[aria-controls*='Polarispopover'] {
      outline: none;
    }
  `,
  spinner: theme => css`
    .Polaris-Spinner svg {
      fill: ${theme.colors.darkGray};
    }
  `,
  loading: theme => css`
    .Polaris-Frame-Loading__Level {
      background-color: ${theme.colors.primary};
    }
  `,
};

/**
 * Add here everything that's related to Polaris styling
 */
const PolarisStyles = createGlobalStyle`
  ${({ theme }) => css`
    ${polarisModifiers.frame(theme)}
    ${polarisModifiers.page(theme)}
    ${polarisModifiers.resourceList(theme)}
    ${polarisModifiers.popover()}
    ${polarisModifiers.spinner(theme)}
    ${polarisModifiers.loading(theme)}
  `}
`;

export default PolarisStyles;
