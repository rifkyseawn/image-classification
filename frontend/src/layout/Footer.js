// Material UI
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

const Footer = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        backgroundColor={theme.palette.background.default}
        paddingTop='1px'
        paddingBottom='1px'
        // sticky footer - see four values below
        position='fixed'
        bottom='0'
        left='0'
        width='100%'
      >
        <Divider />
        <Box
          backgroundColor={theme.palette.background.default}
          position='relative'
          padding={theme.spacing(0.25)}
        >
          <Grid container spacing={0}>
            <Hidden mdDown>
              <Grid container item xs={12} md={4}>
                <List
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: 0,
                  }}
                >
                  <ListItemButton component='a' href='#'>
                    <ListItemText
                      primary={
                        <Typography
                          variant='body2'
                          color={theme.palette.text.secondary}
                        >
                          Privacy Policy
                        </Typography>
                      }
                    />
                  </ListItemButton>
                  <ListItemButton component='a' href='#'>
                    <ListItemText
                      primary={
                        <Typography
                          variant='body2'
                          color={theme.palette.text.secondary}
                        >
                          Terms of Use
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </List>
              </Grid>
            </Hidden>
            <Grid container item xs={12} md={4} justifyContent='center'>
              <List>
                <ListItemButton>
                  <ListItemText
                    primary={
                      <Typography
                        variant='body2'
                        color={theme.palette.text.secondary}
                      >
                        Copyright &copy; {new Date().getFullYear()} Rifky's Company
                      </Typography>
                    }
                  />
                </ListItemButton>
              </List>
            </Grid>
            <Grid container item xs={12} md={4} justifyContent='center'>
              <List>
                <ListItemButton>
                  <ListItemText
                    primary={
                      <Typography
                        variant='body2'
                        color={theme.palette.text.secondary}
                      >
                        
                        <Link
                          href='https://unsplash.com/@joshwp'
                          alt='Josh Power'
                          target='_blank'
                          rel='noreferrer'
                          color={theme.palette.text.secondary}
                        >
                          
                        </Link>
                        <Link
                          href='https://unsplash.com/photos/FWoH2qhLb5I'
                          alt='Unsplash'
                          target='_blank'
                          rel='noreferrer'
                          color={theme.palette.text.secondary}
                        >
                          
                        </Link>
                        .
                      </Typography>
                    }
                  />
                </ListItemButton>
              </List>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
