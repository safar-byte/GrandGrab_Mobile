<div align="center">

# 🍔 GrandGrab Mobile

**First prototype of the GrandGrab food-delivery app — onboarding flow and home screen in React Native + Expo.**

![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo_SDK_54-000020?style=flat-square&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)

</div>

> **Status:** prototype. Development continued in a full rewrite, GrandGrab v2, with cart, checkout, order tracking and auth.

## What's here

- A three-step **onboarding** carousel wired with React Navigation's stack navigator
- A **home screen** layout for the restaurant feed
- Themed text/view components with automatic light and dark mode
- Expo Router tab layout scaffold

## Getting started

```bash
npm install
npx expo start
```

Open it in Expo Go, an Android emulator (`a`) or iOS simulator (`i`).

## Project structure

```
app/(tabs)/                 tab layout and entry screen
navigation/                 OnboardingNavigator (stack)
screens/Onboarding/         OnboardingScreen1–3
screens/Home/               HomeScreen
components/  hooks/  constants/   themed UI, color-scheme hooks, theme
```

## Tech stack

React Native 0.81 · Expo SDK 54 · Expo Router · React Navigation · TypeScript

## Author

**Muhammed Safar** — [@safar-byte](https://github.com/safar-byte)
