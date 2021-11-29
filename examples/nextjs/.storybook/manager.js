// .storybook/manager.js
import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

import logo from '../public/images/tundera-logo.svg'

const theme = create({
  base: 'light',
  brandTitle: 'Suspense Demo',
  brandImage: logo,
})

addons.setConfig({
  theme,
})
