// uno.config.ts
import { defineConfig, presetIcons  } from 'unocss'
import presetUno from '@unocss/preset-uno'
import UnocssIcons from '@unocss/preset-icons'



export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block'}
      })
  ],
})