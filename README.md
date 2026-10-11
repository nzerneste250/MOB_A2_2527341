My name is NZAYISENGA Erneste.

# NEPortfolio

**SWE 3409 | Mobile Application Development | Individual Assignment 2**

NEPortfolio is my personal portfolio Android application developed using React Native, Expo and TypeScript. It presents my background in Software Engineering, education, technical skills and development projects through a simple mobile interface.

The application can be installed directly on an Android phone without Expo Go. Its main features work offline, and editable profile information is stored locally.

## Student Information

| Field | Details |
| --- | --- |
| Name | NZAYISENGA Erneste |
| Registration Number | 25/27341 |
| Institution | INES Ruhengeri |
| Programme | Software Engineering |
| Assignment | SWE 3409 Individual Assignment 2 |
| Verification Code | MOB-A2-7341 |
| Application Name | NEPortfolio |
| Version | 1.0.0 |
| Platform | Android |

## Application Features

NEPortfolio uses five bottom-navigation tabs: Home, Skills, Projects, Edit Profile and About.

### Home
- Displays my introduction, starting with "My name is NZAYISENGA Erneste."
- Presents my professional background and personal profile.
- Displays a profile avatar or a selected profile picture.

### Skills and Education
- Presents my technical and creative skills.
- Displays my education background and training history.
- Includes software development, web development, graphic design and other practical skills.

### Projects
- Displays three projects with descriptions and status information.
- Provides a separate Project Details screen for each project.
- Identifies work that is still under development.

### Edit Profile
- Allows editing of a professional headline, biography, primary skill and availability status.
- Uses controlled form inputs and validation rules.
- Displays useful error messages when information is invalid.
- Saves valid updates locally using AsyncStorage.
- Restores saved information after closing and reopening the application.

### Profile Picture
- Supports image selection from the gallery.
- Supports photo capture using the camera.
- Allows previewing, replacing and removing a selected image.
- Handles permission requests and cancelled selections.

### About and Verification
- Displays my name, registration number and verification code.
- Provides information about the application.
- Supports selecting and previewing an image of my handwritten verification card.

### Offline Functionality
The main application content is accessible without an internet connection. Locally saved profile data remains available after restarting the app. External website links require internet access.

## Projects

| Project | Description | Status |
| --- | --- | --- |
| [ikizame.rw](https://ikizame.rw/) | An online provisional driving-exam preparation and practice platform. | Developed |
| [Personal Portfolio Website](https://nzerneste.pages.dev/) | A personal website presenting my professional background, skills, experience and projects. | Developed |
| Crop Yield Prediction App | A mobile application being developed to help farmers estimate possible crop harvests before planting, using agricultural information. | In Development |

The Crop Yield Prediction App is an ongoing project. Its prediction model is not presented as complete or scientifically validated.

## Technologies Used

| Technology | Purpose |
| --- | --- |
| React Native | Mobile application development |
| Expo | Development tools and native application configuration |
| TypeScript | Type-safe application code |
| React Navigation | Bottom tabs and project-details navigation |
| AsyncStorage | Offline profile data persistence |
| Expo ImagePicker | Camera and gallery access |
| Expo EAS Build | Android APK generation |
| Git and GitHub | Version control and release distribution |

## Project Setup

### Requirements

- Node.js and npm
- Git
- Android phone for testing
- Expo Go for development testing, or an installed standalone APK
- Expo account for EAS builds

### Clone the Repository

```bash
git clone https://github.com/nzerneste250/MOB_A2_2527341.git
cd MOB_A2_2527341
```

### Install Dependencies

```bash
npm install
npx expo install --check
npx tsc --noEmit
```

### Run in Expo Go

```bash
npx expo start --go
```

Scan the QR code using Expo Go on an Android device.

If the phone cannot connect through the local network, try:

```bash
npx expo start --go --tunnel
```

### Optional Web Preview

```bash
npx expo start --web
```

A web preview is not a replacement for testing the installed Android application.

## Android APK

A standalone Android installation package is available in the GitHub release.

**Version:** 1.0.0

**Download:** [MOB_A2_2527341.apk](https://github.com/nzerneste250/MOB_A2_2527341/releases/download/v1.0.0/MOB_A2_2527341.apk)

### Install the APK

1. Download the APK to an Android phone.
2. Open the downloaded APK file.
3. Allow installation from that source if Android requests permission.
4. Complete the installation.
5. Open NEPortfolio using its application icon.

The APK launches independently and does not require Expo Go.

### Build an APK from Source

The EAS preview profile is configured for Android APK builds.

```bash
npx eas-cli login
npx eas-cli build -p android --profile preview
```

The build requires an Expo account and access to the necessary Expo project configuration.

## Testing and Evidence

The standalone application was tested on a physical Android device.

| Test | Result |
| --- | --- |
| Device | TECNO C16 |
| Android Version | Android 13 |
| Standalone APK installation | Passed |
| App launch without Expo Go | Passed |
| App icon and startup screen | Passed |
| Bottom-tab navigation | Passed |
| Project details navigation | Passed |
| Profile input validation | Passed |
| Correcting invalid form data | Passed |
| Saving profile changes | Passed |
| AsyncStorage persistence after restart | Passed |
| Camera and gallery selection | Passed |
| Image preview, replacement and removal | Passed |
| Image permission and cancellation handling | Passed |
| Handwritten verification-card preview | Passed |
| Airplane Mode and offline content | Passed |
| Larger font and layout checks | Passed |

The test log records the application checks and results. Testing was performed using the installed application rather than relying only on Expo Go.

### Assignment Documentation

| File | Description |
| --- | --- |
| `docs/MOB_A2_2527341_UIUX.pdf` | UI/UX design documentation |
| `evidence/MOB_A2_2527341_TEST_LOG.pdf` | Android application test log |
| `evidence/MOB_A2_2527341_DECLARATION.pdf` | Assignment declaration |
| `evidence/AI_USE.md` | AI assistance disclosure |

### Demonstration Video

The demonstration shows the Android application, student verification, main functionality, form validation, saved profile information and offline operation.

[Download MOB_A2_2527341_DEMO.mp4](https://github.com/nzerneste250/MOB_A2_2527341/releases/download/v1.0.0/MOB_A2_2527341_DEMO.mp4)

## Known Limitations

- External websites cannot be opened without an internet connection.
- The Crop Yield Prediction App is still in development and does not provide a finished prediction model in NEPortfolio.
- Camera and gallery functionality depend on device permissions.
- The application stores editable profile information locally rather than synchronizing it between devices.

## Repository and Release

| Resource | Link or Value |
| --- | --- |
| GitHub Repository | https://github.com/nzerneste250/MOB_A2_2527341 |
| Release | https://github.com/nzerneste250/MOB_A2_2527341/releases/tag/v1.0.0 |
| APK | https://github.com/nzerneste250/MOB_A2_2527341/releases/download/v1.0.0/MOB_A2_2527341.apk |
| Demo Video | https://github.com/nzerneste250/MOB_A2_2527341/releases/download/v1.0.0/MOB_A2_2527341_DEMO.mp4 |
| Release Tag | `v1.0.0` |
| Release Tag Commit | `a30f2c18c53fc687a9b2d2941538a6322ea7a84d` |

The release tag identifies the published version. The latest commit on `main` may contain additional documentation updates after release publication. Run `git rev-parse HEAD` to identify the latest submission commit.

## Academic Information

This application was developed for **SWE 3409: Mobile Application Development, Individual Assignment 2**, at INES Ruhengeri.

**Student:** NZAYISENGA Erneste

**Registration Number:** 25/27341

**Verification Code:** MOB-A2-7341

The project uses open-source libraries and development tools. Any AI assistance used during development is documented in `evidence/AI_USE.md`.

## License

This repository is submitted as academic coursework. No separate open-source license is granted unless a license file is added.
