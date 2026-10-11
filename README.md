My name is NZAYISENGA Erneste.

# NEPortfolio

**SWE 3409 | Mobile Application Development | Individual Assignment 2**

NEPortfolio is my personal portfolio Android application, developed with React Native, Expo and TypeScript. It introduces my background in Software Engineering and presents my education, skills and development projects in a mobile-friendly interface.

## Student information

| Field | Details |
| --- | --- |
| Name | NZAYISENGA Erneste |
| Registration number | 25/27341 |
| Institution | INES Ruhengeri |
| Programme | Software Engineering |
| Verification code | MOB-A2-7341 |
| Application name | NEPortfolio |
| Version | 1.0.0 |

## What the app does

- **Home:** My introduction, professional headline, biography and profile avatar.
- **Skills & Education:** My technical skills and education history.
- **Projects:** Details of three student projects, including the Crop Yield Prediction App, which is still in development.
- **Edit Profile:** Update a headline, short biography, primary skill and availability status with input validation.
- **Profile Picture:** Choose an image from the gallery or camera, preview it, replace it or remove it.
- **Offline Storage:** Save editable profile details locally with AsyncStorage and restore them after an app restart.
- **About:** Application and student identification, release information and a local handwritten-verification-card photo preview.

The core portfolio content is intended to work without internet access. Opening external websites requires a connection.

## Projects

| Project | Description | Status |
| --- | --- | --- |
| [ikizame.rw](https://ikizame.rw/) | Online provisional driving-exam practice platform. | Developed |
| Personal Portfolio Website | Website presenting professional background, skills and projects. | Student project |
| Crop Yield Prediction App | Mobile application under development to help farmers estimate potential harvests. | In development |

The crop prediction project is **not described as a completed or validated prediction model**.

## Technologies

- React Native
- Expo
- TypeScript
- React Navigation
- AsyncStorage
- Expo ImagePicker
- Expo EAS Build

## Project setup

### Requirements

Install Node.js, npm, Git and Expo Go on an Android phone. For standalone Android builds, use Expo EAS Build.

### Run locally

```bash
npm install
npx expo install --check
npx tsc --noEmit
npx expo start --go
```

Scan the Expo QR code using Expo Go on Android. To use a tunnel when local networking is unavailable:

```bash
npx expo start --go --tunnel
```

### Optional web preview

```bash
npx expo start --web
```

Web preview does not replace native Android testing.

## Android APK build

The EAS `preview` build profile is configured for an installable Android APK.

```bash
npx eas-cli login
npx eas-cli build -p android --profile preview
```

The final APK must be installed and tested on an Android device **without Expo Go** before submission.

## Testing and evidence

The final submission must document testing of navigation, profile editing, validation, camera/gallery permissions, profile persistence, app restart, responsive layout and Airplane Mode.

| Evidence | Status |
| --- | --- |
| Tested Android device and model | To be recorded after physical-device testing |
| Android version | To be recorded after physical-device testing |
| Standalone APK launch | Not yet recorded |
| Airplane Mode test | Not yet recorded |
| Final commit hash | To be added after final commit |
| GitHub release | To be added after release creation |
| APK download link | To be added after upload |

The required UI/UX document, test log, declaration and AI-use disclosure will be included in `docs/` and `evidence/` before final submission.

## Known limitations

- External links require internet access.
- The Crop Yield Prediction App project is still in development.
- Expo Go does not verify the standalone Android launcher icon or native splash screen; these require a native build.

## Source and release

- **Repository:** https://github.com/nzerneste250/MOB_A2_2527341
- **Release v1.0.0:** Pending
- **APK:** Pending
- **Final commit:** Pending

## Academic work

Prepared for the SWE 3409 individual practical assignment at INES Ruhengeri. Third-party packages and any AI assistance used during development should be disclosed accurately in `evidence/AI_USE.md`.
