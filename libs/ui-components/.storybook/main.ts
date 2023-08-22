import type { StorybookConfig } from '@storybook/react-vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: '',
      },
    },
  },
  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [
        viteTsConfigPaths({
          root: '../../',
        }),
      ],
    }),
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
