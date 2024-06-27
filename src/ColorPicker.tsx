import { useState } from 'react';
import { SketchPicker } from 'react-color';
import {
  Typography,
  Grid,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@material-ui/core';

const ColorPickerTool = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [themeName, setThemeName] = useState('');
  const [palette, setPalette] = useState({
    light: {
      primary: {
        main: '#134FAE',
        light: '#3A77D9',
        dark: '#05409C',
        contrastText: '#FFFFFF',
        800: '#134FAE',
        700: '#3669BA',
        600: '#5A84C6',
        500: '#7D9ED2',
        400: '#A1B9DF',
        300: '#C4D3EB',
        200: '#E3EAF5',
        100: '#FFFFFF',
      },
      secondary: {
        main: '#FFD300',
        light: '#FFE04D',
        dark: '#F6CC00',
        contrastText: '#FFFFFF',
      },
      info: {
        main: '#0288D1',
        light: '#03A9F4',
        dark: '#01579B',
        contrastText: '#FFFFFF',
      },
      success: {
        main: '#2E7D32',
        light: '#4CAF50',
        dark: '#1B5E20',
        contrastText: '#FFFFFF',
      },
      warning: {
        main: '#ED6C02',
        light: '#FF9800',
        dark: '#E65100',
        contrastText: '#FFFFFF',
      },
      error: {
        main: '#D32F2F',
        light: '#EF5350',
        dark: '#C62828',
        contrastText: '#FFFFFF',
      },
      white: {
        default: '#FFFFFF',
        opacity80: '#FFFFFFCC',
        opacity60: '#FFFFFF99',
        opacity40: '#FFFFFF66',
        opacity20: '#FFFFFF33',
      },
      grey: {
        900: '#212121',
        800: '#424242',
        700: '#616161',
        600: '#757575',
        500: '#9E9E9E',
        400: '#BDBDBD',
        300: '#E0E0E0',
        200: '#EEEEEE',
        100: '#F5F5F5',
        50: '#FAFAFA',
      },
      text: {
        primary: '#212b36',
        secondary: '#637381',
        disabled: '#919eab',
        900: '#212121',
        800: '#424242',
        700: '#616161',
        600: '#757575',
        500: '#9E9E9E',
        400: '#BDBDBD',
        300: '#E0E0E0',
        200: '#EEEEEE',
        100: '#F5F5F5',
        50: '#FAFAFA',
      },
      common: {
        black: '#000000',
        white: '#ffffff',
      },
      divider: '#E0E0E0',
      background: {
        default: '#FCFCFC',
        paper: '#FFFFFF',
        neutral: '#f4f6f8',
      },
      action: {
        active: '#637381',
        hover: '#919eab14',
        selected: '#919eab29',
        disabled: '#919eabcc',
        disabledBackground: '#919eab3d',
        focus: '#919eab3d',
      },
    },
    dark: {
      // dark mode palette values...
      primary: {
        main: '#90caf9',
        light: '#e3f2fd',
        dark: '#42a5f5',
        contrastText: '#000000',
        800: '#90caf9',
        700: '#64b5f6',
        600: '#42a5f5',
        500: '#2196f3',
        400: '#1e88e5',
        300: '#1976d2',
        200: '#1565c0',
        100: '#0d47a1',
      },
      secondary: {
        main: '#f48fb1',
        light: '#f8bbd0',
        dark: '#ec407a',
        contrastText: '#000000',
      },
      info: {
        main: '#29b6f6',
        light: '#81d4fa',
        dark: '#039be5',
        contrastText: '#000000',
      },
      success: {
        main: '#66bb6a',
        light: '#a5d6a7',
        dark: '#43a047',
        contrastText: '#000000',
      },
      warning: {
        main: '#ffa726',
        light: '#ffb74d',
        dark: '#fb8c00',
        contrastText: '#000000',
      },
      error: {
        main: '#ef5350',
        light: '#e57373',
        dark: '#e53935',
        contrastText: '#000000',
      },
      white: {
        default: '#000000',
        opacity80: '#000000cc',
        opacity60: '#00000099',
        opacity40: '#00000066',
        opacity20: '#00000033',
      },
      grey: {
        900: '#f5f5f5',
        800: '#eeeeee',
        700: '#e0e0e0',
        600: '#bdbdbd',
        500: '#9e9e9e',
        400: '#757575',
        300: '#616161',
        200: '#424242',
        100: '#212121',
        50: '#121212',
      },
      text: {
        primary: '#ffffff',
        secondary: '#e0e0e0',
        disabled: '#9e9e9e',
        900: '#f5f5f5',
        800: '#eeeeee',
        700: '#e0e0e0',
        600: '#bdbdbd',
        500: '#9e9e9e',
        400: '#757575',
        300: '#616161',
        200: '#424242',
        100: '#212121',
        50: '#121212',
      },
      common: {
        black: '#ffffff',
        white: '#000000',
      },
      divider: '#424242',
      background: {
        default: '#121212',
        paper: '#212121',
        neutral: '#303030',
      },
      action: {
        active: '#e0e0e0',
        hover: '#9e9e9e14',
        selected: '#9e9e9e29',
        disabled: '#9e9e9ecc',
        disabledBackground: '#9e9e9e3d',
        focus: '#9e9e9e3d',
      },
    },
  });

  const [open, setOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState('');
  const [currentPath, setCurrentPath] = useState<string[]>([]);

  const handleClickOpen = (color: string, path: string[]) => {
    setCurrentColor(color);
    setCurrentPath(path);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleColorChange = (color: any) => {
    setCurrentColor(color.hex);
    setPalette((prevPalette) => {
      const updatedPalette = { ...prevPalette };
      let target = updatedPalette[mode];
      for (let i = 0; i < currentPath.length - 1; i++) {
        target = target[currentPath[i]];
      }
      target[currentPath[currentPath.length - 1]] = color.hex;
      return updatedPalette;
    });
  };

  const renderColorFields = (colors: any, path: string[] = []) => {
    return Object.keys(colors).map((key) => {
      const value = colors[key];
      const currentPath = [...path, key];
      if (typeof value === 'string') {
        return (
          <>
            <Grid
              item
              xs={4}
              sm={6}
              md={4}
              spacing={2}
              key={currentPath.join('.')}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                  label={currentPath.join('.')}
                  value={value}
                  onClick={() => handleClickOpen(value, currentPath)}
                  readOnly
                  fullWidth
                />
                <div
                  style={{
                    width: 24,
                    height: 24,
                    backgroundColor: value,
                    marginLeft: 8,
                    border: '1px solid #ccc',
                  }}
                />
              </div>
            </Grid>
          </>
        );
      } else {
        return renderColorFields(value, currentPath);
      }
    });
  };

  const handleSave = () => {
    const themeId = Date.now();
    const finalThemeName = themeName || `Theme${themeId}`;
    const data = {
      themeName: finalThemeName,
      mode,
      palette: palette[mode],
    };

    const json = JSON.stringify(data, null, 2);
    console.log(json);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${finalThemeName}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Theme Mode</Typography>
        <Button
          variant={mode === 'light' ? 'contained' : 'outlined'}
          onClick={() => setMode('light')}
        >
          Light Mode
        </Button>
        <Button
          variant={mode === 'dark' ? 'contained' : 'outlined'}
          onClick={() => setMode('dark')}
        >
          Dark Mode
        </Button>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Theme Name"
          value={themeName}
          onChange={(e) => setThemeName(e.target.value)}
          fullWidth
        />
      </Grid>
      {renderColorFields(palette[mode])}
      <Grid item xs={12}>
        <div style={{
          textAlign: 'right',
          marginTop: 16,
        }}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save Colors
          </Button>
        </div>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Pick a Color</DialogTitle>
        <DialogContent>
          <SketchPicker
            color={currentColor}
            onChangeComplete={handleColorChange}
          />
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default ColorPickerTool;
