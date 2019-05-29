# PeachPocket app

🍑 a playground React Native app for using Scuttlebutt on iOS and Android

_nothing to see here_

## Setup

**pre-requisites**:

- ["Getting Started with React Native"](https://facebook.github.io/react-native/docs/getting-started.html)
- ["Automatically accept all SDK licenses"](https://stackoverflow.com/questions/38096225/automatically-accept-all-sdk-licences)

```shell
git clone git@github.com:ahdinosaur/peachpocket
cd peachpocket
npm install
```

## Develop on Android

In three separate terminals, run:

1. `npm run start`: Metro, the React-Native bundler server
2. `npm run emu:android`: the Android emulator
  - you will need to set this up beforehand using Android Studio
3. `npm run run:android`: the debug build and install script

## Test

In three separate terminals, run:

1. `npm run start`: Metro, the React-Native bundler server
2. `npm run e2e:server`: the detox server
3. `npm run test:e2e`: the detox build and test script

## Notes

### Native dependencies

- [`detox`](https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md)
- [`react-native-config`](https://github.com/luggit/react-native-config#setup)
  - TODO iOS step: https://github.com/luggit/react-native-config#extra-step-for-ios-support-infoplist
- [`react-native-screens`](https://github.com/kmagiera/react-native-screens#usage-with-react-navigation-without-expo)
- [`react-native-gesture-handler`](https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html)
