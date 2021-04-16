declare module 'platform-detect' {
  export default interface PlatformDetect {
    windows: boolean
    macos: boolean
    linux: boolean
    linuxBased: boolean

    android: boolean
    ios: boolean
    phone: boolean
    tablet: boolean
  }
}
