import { COLOR_CODE } from './constants'
import { isColorCodeKey, isNil } from './utils'

type Config = {
  log?: {
    color?: keyof typeof COLOR_CODE | number | null
    backgroundColor?: keyof typeof COLOR_CODE | number | null
    prefix?: string | number | null
    suffix?: string | number | null
    isBold?: boolean
    isItalic?: boolean
  }
}

export const settingConfig = (config: Config): void => {
  if (config.log) {
    const originalLog = console.log
    const log = { ...config.log }
    let ANSIEscapeCode = ''

    console.log = (...messages: unknown[]): void => {
      if (isNil(log.color)) {
        log.color = 'default'
      }

      if (isColorCodeKey(log.color)) {
        const { color } = log
        const { foreground } = COLOR_CODE[color]

        ANSIEscapeCode = `${foreground}`
      } else {
        const { color } = log

        ANSIEscapeCode = `38;5;${color}`
      }

      const colorizedMessages = messages.map((message) => `\x1B[${ANSIEscapeCode}m${message}\x1B[0m`)
      originalLog.apply(console, colorizedMessages)
    }
  }
}
