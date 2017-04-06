import { loadStorybook } from 'storybook-filepath-chapters';

const elements = require.context('../src/components/elements', true, /.stories.js$/);
// const modules = require.context('../src/components/modules', true, /.stories.js$/);

loadStorybook('Elements', elements);
// loadStorybook('Modules', modules);
