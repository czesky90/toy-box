import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


const steps = [
  {
    label: 'Wsparcie Wszechstronnego Rozwoju Dziecka',
    description: `Wypożyczanie zabawek dostosowanych do wieku i etapu rozwoju dziecka wspiera jego kreatywność, rozwój poznawczy, motoryczny i społeczny. Zabawki dobrze dostosowane rozwijają umiejętności oraz pobudzają ciekawość świata.`,
  },
  {
    label: 'Oszczędność Miejsca i Zrównoważony Styl Życia',
    description:
      'Zmniejsz ilość zabawek gromadzonych w domu! Wypożyczanie pozwala cieszyć się różnorodnością zabawek, jednocześnie oszczędzając przestrzeń w domu. Ponadto, ograniczamy ilość plastiku i odpadów, dbając o naszą planetę.',
  },
  {
    label: 'Elastyczność i Oszczędność Finansowa',
    description: `Dzięki systemowi wypożyczania nie musisz inwestować w kolejne zabawki, które dzieci szybko wyrastają. Oszczędzasz czas i pieniądze, korzystając z elastycznego systemu rotacji zabawek.`,
  },
  {
    label: 'Stałe Dostosowanie do Rozwoju Dziecka',
    description: `Dzieci szybko rosną i zmieniają swoje zainteresowania. Dzięki wypożyczaniu możesz regularnie dostosowywać zestawy zabawek do aktualnych potrzeb i preferencji dziecka.stemu rotacji zabawek.`,
  },
  {
    label: 'Wsparcie Dla Rodziców',
    description: `Zyskaj czas dla siebie! Wypożyczanie zabawek to nie tylko radość dla dzieci, ale także dla rodziców, którzy zyskują czas, oszczędność oraz spokój, mając pewność, że oferują swoim dzieciom różnorodność i edukacyjną wartość zabawy.`,
  },
];


const Why = () => {
    const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <><div>Dlaczego Warto Wypożyczać Zabawki dla Dzieci?


      </div><Box sx={{ maxWidth: 400, flexGrow: 1 }}>
              <Paper
                  square
                  elevation={0}
                  sx={{
                      display: 'flex',
                      alignItems: 'center',
                      height: 50,
                      pl: 2,
                      bgcolor: 'background.default',
                  }}
              >
                  <Typography>{steps[activeStep].label}</Typography>
              </Paper>
              <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
                  {steps[activeStep].description}
              </Box>
              <MobileStepper
                  variant="text"
                  steps={maxSteps}
                  position="static"
                  activeStep={activeStep}
                  nextButton={<Button
                      size="small"
                      onClick={handleNext}
                      disabled={activeStep === maxSteps - 1}
                  >
                      Next
                      {theme.direction === 'rtl' ? (
                          <KeyboardArrowLeft />
                      ) : (
                          <KeyboardArrowRight />
                      )}
                  </Button>}
                  backButton={<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                      {theme.direction === 'rtl' ? (
                          <KeyboardArrowRight />
                      ) : (
                          <KeyboardArrowLeft />
                      )}
                      Back
                  </Button>} />
          </Box></>
  )
}

export default Why