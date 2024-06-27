# Color Picker Tool

This project is a simple color picker tool built with React, TypeScript, and Vite.js. It allows users to select colors for different theme palettes (light and dark modes) and save the customized theme as a JSON file.

## Features

- Light and Dark mode selection
- Dynamic color selection for various palette fields
- Theme name input with automatic ID generation if left empty
- Save the customized theme as a JSON file

## Technologies Used

- React
- TypeScript
- Vite.js
- Material-UI
- React Color

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/mustafasavul/react-mui-color-palette-generator
    cd react-mui-color-palette-generator
    ```

2. Install dependencies:

    ```bash
    npm install or yarn install
    ```

3. Run the development server:

    ```bash
    npm run dev or yarn dev
    ```

## Usage

1. Open the application in your browser (usually at `http://localhost:3000`).
2. Select the theme mode (Light or Dark) using the provided buttons.
3. Click on any color input field to open the color picker.
4. Choose a color from the picker and it will be displayed in the input field.
5. Enter a theme name or leave it blank to auto-generate one.
6. Click the "Save Colors" button to download the customized theme as a JSON file.

## Project Structure

- `src/`: Contains the source code for the project.
  - `components/`: Contains the React components used in the project.
  - `App.tsx`: Main application component.
  - `index.tsx`: Entry point for the React application.
- `public/`: Contains static assets.
- `vite.config.ts`: Configuration file for Vite.js.

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.
