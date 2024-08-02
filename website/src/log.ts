const originalLog = console.log

export const loadConfig = (a: unknown) => {
  console.log = (...args) => {
    const coloredArgs = args.map((arg) => `${arg}${a}`)

    originalLog.apply(console, coloredArgs)
  }
}
