// Material UI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

// Material Icons
import SendToMobileOutlinedIcon from '@mui/icons-material/SendToMobileOutlined';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';

import DescriptionItem from './DescriptionItem';

const Description = () => {
  const theme = useTheme();

  return (
    <Box
      maxWidth={{ sm: 720, md: 1236 }}
      width={1}
      margin='0 auto'
      paddingTop={2}
      paddingBottom={2}
    >
      <Box
        backgroundColor={theme.palette.background.default}
        paddingTop={4}
        data-aos='fade-up'
      >
        <Container
          maxWidth='lg'
          display='flex'
          sx={{
            alignItems: 'center',
            flexDirection: 'column',
            paddingX: {
              md: '15px !important',
            },
          }}
        >
          <Typography           
            align='center'
            color={theme.palette.text.primary}
            variant='h1'
            marginTop='30px'
            data-aos='fade-up'
          >
            How It Works
          </Typography>
          <Typography           
            align='center'
            color={theme.palette.text.secondary}
            variant='h4'
            paddingTop={3}
            paddingBottom={3}
            marginBottom='15px'
            data-aos='fade-up'
          >
            Follow this step-by-step guide to use the app:
          </Typography>
          <Grid container spacing={4} data-aos='fade-up'>
            <DescriptionItem
              icon={<AddAPhotoOutlinedIcon style={{ height: 25, width: 25 }} />}
              title='Select an Image'
              subtitle='Choose an image for classification by dragging and dropping it into the designated dropzone in your browser.'
            />
            <DescriptionItem
              icon={
                <SendToMobileOutlinedIcon style={{ height: 25, width: 25 }} />
              }
              title='Send the Image for Classification'
              subtitle='Click the “Send Image” button to submit your image to the machine learning model.'
            />
            <DescriptionItem
              icon={<GetAppOutlinedIcon style={{ height: 25, width: 25 }} />}
              title='Get the Classification Result'
              subtitle='The model will process the image and display the classification result on your screen.'
            />
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Description;
