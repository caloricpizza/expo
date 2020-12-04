---
title: Set up your project and environment
---

Follow these instructions to integrate EAS Build in your existing project.

## 1. Install the latest EAS CLI

Install EAS CLI by running `npm install -g eas-cli` (or `yarn global add eas-cli`). If you already have it, make sure you're using the latest version. EAS Build is in alpha and it's changing rapidly, so the only way to ensure that you will have the best experience is to use the latest eas-cli version.

## 2. Sign in

Sign in with `eas login`, or sign up with `eas register` if you don't have an Expo account yet. You can check if you're logged in by running `eas whoami`.

## 3. Set application identifiers

Set identifiers that will be used to identify your application on the Apple App Store and Google Play.

- **Android**: Set `expo.android.package` in your app.json/app.config.js.
- **iOS**: Set `expo.ios.bundleIdentifier` in your app.json/app.config.js.

Learn more about application identifiers in [EAS Build Walkthrough](walkthrough.md#set-application-identifiers).

## 4. Configure the project

Run `eas build:configure` to configure your iOS and Android projects to run on EAS Build.

- **Android**: If you have not yet generated a keystore for your app, you can let EAS CLI take care of that for you. If you have already built your app in the managed workflow with `expo build:android` then the same credentials will be used by EAS Build. If you would rather manually generate your keystore, please see the advanced [Android Credentials](advanced-credentials-configuration.md#android-credentials) section for more information.

- **iOS**: This requires access to a **paid** [Apple Developer Account](https://developer.apple.com/programs) to configure the credentials required for signing your app. EAS CLI will take care of acquiring the credentials for you, and if you have already built your app in the managed workflow with `expo build:ios` then the same credentials will be used by EAS Build. If you would rather manually provide your credentials, refer to the advanced [iOS Credentials](advanced-credentials-configuration.md#ios-credentials) section for more information.

Learn more about the configuration steps in [EAS Build Walkthrough](walkthrough.md#configure-your-project-for-eas-build).

## 5. Run the build

- Run `eas build --platform android` to build for Android.
- Run `eas build --platform ios` to build for iOS.

> 💡 You can run `eas build --platform all` to build for Android and iOS at the same time.

## 6. Check the status of your builds

By default, the `eas build` command will wait for your build to complete. However, if you interrupt this command you can still monitor the progress of your builds by either visiting [the Expo website](https://expo.io/) or running the `eas build:status` command.

## 7. Learn more

- Read the [Configuration with eas.json](eas-json.md) guide to get familiar with EAS Build configuration options.
- If you want to learn more about the internals of Android and iOS builds, check out our [Android build process](android-builds.md) and [iOS build process](ios-builds.md) pages.
- Lastly, if you feel like an expert on credentials configuration, see the [Advanced credentials configuration](advanced-credentials-configuration.md) guide to customize the build process even further.
- Other than that, stay tuned - more features are coming to EAS Build soon!
