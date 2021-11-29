import { RouterContext } from 'next/dist/shared/lib/router-context'
import ThemeProvider from '../src/providers/ThemeProvider'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  options: {
    storySort: {
      order: ['StyleGuide', 'Components', 'Fields', 'App Layout'],
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'Light',
    values: [
      {
        name: 'Gray',
        value: '#F7FAFC',
      },
      {
        name: 'Light',
        value: '#ffffff',
      },
      {
        name: 'Dark',
        value: '#1A202C',
      },
    ],
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
]
