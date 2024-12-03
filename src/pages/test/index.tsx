import React from 'react'
import { Box, Typography, Grid, Card, CircularProgress, Divider } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

type EngagementDriver = {
  topic: string
  color: string
  percentage: number
}

type SmallVoteData = {
  label: string
  value: string
  percentage: number
  votes: number
}

const FabriceTestPage = () => {
  const engagementDrivers: EngagementDriver[] = [
    { topic: 'Health Policy', color: '#4cafef', percentage: 90 },
    { topic: 'Housing', color: '#7e57c2', percentage: 70 },
    { topic: 'Investment Strategies', color: '#3f51b5', percentage: 80 },
    { topic: 'HR/DEI', color: '#ff9800', percentage: 60 },
    { topic: 'Sustainability Efforts', color: '#4caf50', percentage: 100 }
  ]

  const smallVotesData: SmallVoteData[] = [
    { label: 'Gender', value: 'Female', percentage: 35, votes: 10 },
    { label: 'Age', value: '40+', percentage: 15, votes: 34 },
    { label: 'Ethnicity', value: 'Afr/ME', percentage: 25, votes: 56 },
    { label: 'Team', value: 'Gov', percentage: 25, votes: 2 }
  ]

  const totalVotes = smallVotesData.reduce((sum: number, v: SmallVoteData) => sum + v.votes, 0)

  const maxSize = 150
  const minSize = 50
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant='h5' gutterBottom>
        What's Driving Engagement?
      </Typography>
      <Card sx={{ padding: 2, borderRadius: 2, boxShadow: 3 }}>
        <Grid container spacing={4}>
          {engagementDrivers.map(driver => {
            // Dynamically calculate circle size based on percentage
            const size = (driver.percentage / 100) * (maxSize - minSize) + minSize

            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={2.4} // 5 columns on medium screens
                key={driver.topic}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start'
                }}
              >
                {/* Header Container */}
                <Box
                  sx={{
                    minHeight: 70, // Ensures consistent header height
                    display: 'flex',
                    flexDirection: 'column', // Stack header and regions text
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                  }}
                >
                  <Typography
                    variant='h6'
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '1rem',
                      lineHeight: 1.2,
                      marginBottom: 0.5 // Reduce gap between header and "xx regions"
                    }}
                  >
                    {driver.topic}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 12,
                      color: 'text.secondary'
                    }}
                  >
                    xx regions
                  </Typography>
                </Box>

                {/* Circle Container */}
                <Box
                  sx={{
                    minHeight: 150, // Set a consistent height for all circles
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 2
                  }}
                >
                  {/* Circle */}
                  <Box
                    sx={{
                      width: `${size}px`,
                      height: `${size}px`,
                      backgroundColor: driver.color,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    {driver.percentage}%
                  </Box>
                </Box>

                {/* Region Text */}
                <Typography
                  variant='caption'
                  sx={{
                    textAlign: 'center',
                    color: 'text.secondary'
                  }}
                >
                  region
                </Typography>
              </Grid>
            )
          })}
        </Grid>
      </Card>

      <Typography variant='h6' gutterBottom sx={{ marginTop: 10 }}>
        Top Questions
      </Typography>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1-content'
          id='panel1-header'
          sx={{ justifyContent: 'space-between' }}
        >
          QUESTION 1: What is the minimum payment you would want to receive for helping another company for 10 minutes?
          <Typography variant='body1'>Response</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Divider sx={{ paddingTop: 5, borderColor: 'transparent' }} />
          <Box sx={{ padding: 4, position: 'relative' }}>
            <Grid container spacing={2} alignItems='center' justifyContent='center'>
              {/* Left Box */}
              <Grid item xs={12} md={3} sx={{ zIndex: 1, padding: 0 }}>
                <Box
                  sx={{
                    border: '3px solid #d1c4e9',
                    borderRadius: 2,
                    padding: 2,
                    textAlign: 'center',
                    backgroundColor: 'white'
                  }}
                >
                  <Typography
                    variant='body2'
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 'bold',
                      textTransform: 'uppercase'
                    }}
                  >
                    Recommended Option
                  </Typography>
                  <Typography variant='h5' sx={{ fontWeight: 'bold', marginTop: 1 }}>
                    $10
                  </Typography>
                </Box>
              </Grid>

              {/* All Votes */}
              <Grid item xs={12} md={3} sx={{ textAlign: 'center', marginTop: -15, position: 'relative' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '70%',
                    left: 0,
                    width: '100%',
                    height: '3px',
                    backgroundColor: '#d1c4e9',
                    zIndex: 0,
                    paddingLeft: '10px'
                  }}
                />
                <Typography variant='h5' sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                  <Box component='span' sx={{ display: 'inline-flex', alignItems: 'center' }}>
                    <Box
                      component='span'
                      sx={{
                        fontSize: '1.5rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        marginRight: 0.5
                      }}
                    >
                      &#10003;
                    </Box>
                    {totalVotes}
                  </Box>
                </Typography>
                <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                  All votes
                </Typography>
                <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                  <CircularProgress
                    variant='determinate'
                    value={100}
                    size={80}
                    thickness={4}
                    sx={{
                      color: '#9d9d9d',
                      position: 'absolute',
                      backgroundColor: 'white'
                    }}
                  />
                  <CircularProgress
                    variant='determinate'
                    value={45}
                    size={80}
                    thickness={4}
                    sx={{ color: '#ff9800' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      fontWeight: 'bold',
                      fontSize: '1.25rem'
                    }}
                  >
                    100%
                  </Box>
                </Box>
              </Grid>

              {/* Small Circles */}
              <Grid item xs={12} md={5} sx={{ marginTop: -4, position: 'relative' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '58%',
                    left: 0,
                    width: '90%',
                    height: '3px',
                    backgroundColor: '#d1c4e9',
                    zIndex: 0,
                    marginRight: '50px'
                  }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%'
                  }}
                >
                  {smallVotesData.map((vote, index) => (
                    <Box
                      key={index}
                      sx={{
                        textAlign: 'center',
                        position: 'relative',
                        width: '200px'
                      }}
                    >
                      <Typography
                        variant='body2'
                        sx={{
                          fontSize: 12,
                          marginBottom: 0.5,
                          textTransform: 'uppercase',
                          color: 'text.secondary'
                        }}
                      >
                        {vote.label}
                      </Typography>
                      <Typography
                        variant='body2'
                        sx={{
                          fontSize: 14,
                          fontWeight: 'bold',
                          marginBottom: 1
                        }}
                      >
                        {vote.value}
                      </Typography>

                      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                        <CircularProgress
                          variant='determinate'
                          value={100}
                          size={50}
                          thickness={4}
                          sx={{
                            color: '#9d9d9d',
                            position: 'absolute',
                            backgroundColor: 'white'
                          }}
                        />
                        <CircularProgress
                          variant='determinate'
                          value={vote.percentage}
                          size={50}
                          thickness={4}
                          sx={{ color: '#ff9800' }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontWeight: 'bold',
                            fontSize: '0.875rem'
                          }}
                        >
                          {vote.percentage}%
                        </Box>
                      </Box>

                      <Typography
                        variant='body2'
                        sx={{
                          marginTop: 0.5,
                          fontSize: 12,
                          color: 'text.secondary'
                        }}
                      >
                        {vote.votes} votes
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2-content'
          id='panel2-header'
          sx={{ justifyContent: 'space-between' }}
        >
          QUESTION 2: What challenges do we face scaling up support for independent producers of renewable energy?
          <Typography variant='body1'>Response</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2-content'
          id='panel2-header'
          sx={{ justifyContent: 'space-between' }}
        >
          QUESTION 3: Do you feel comfortable expressing your opinions and ideas without fear of discrimination or bias?
          <Typography variant='body1'>Response</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Box sx={{ marginTop: 10, padding: 4, backgroundColor: '#d7d2e7' }}>
        <Typography>
          <Box
            component='span'
            sx={{
              fontWeight: 'bold',
              fontSize: 'inherit'
            }}
          >
            INSIGHTS
          </Box>{' '}
          <Box
            component='span'
            sx={{
              fontWeight: 400,
              fontSize: 16
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae orci egestas, laoreet sem et, tincidunt
            leo.
          </Box>
        </Typography>
        <Typography>
          <Box
            component='span'
            sx={{
              fontWeight: 'bold',
              fontSize: 'inherit'
            }}
          >
            WHERE ADDITIONAL REPRESENTATION MAY BE NEEDED:{' '}
          </Box>{' '}
          <Box
            component='span'
            sx={{
              fontWeight: 400,
              fontSize: 16
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae orci egestas, laoreet sem et, tincidunt
            leo.
          </Box>
        </Typography>
      </Box>
    </Box>
  )
}

export default FabriceTestPage
