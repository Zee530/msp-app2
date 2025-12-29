import { Box, Button, Center, Input, Textarea } from "@chakra-ui/react"
import React from "react"
import * as Types from "../core/Types"

import { computeButton } from "../core/Styles"

const [animeId, setAnimeid] = React.useState<string>('')
const [data, setData] = React.useState<Types.AnimeData | null>(null)
const [error, setError] = React.useState<string | null>(null)

const idChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const inputtedID = event.target.value
  setAnimeid(inputtedID)
}

const fetchAnimeData = async() => {
  setData(null)
  setError(null)

  const url = new URL(`/api/mal/anime/${animeId}`, 'http://localhost:3001')
   fetch(url)  
    .then(response => {
      console.log('Status Code:', response.status);
      console.log('Response: ', response);
      if (!response.ok) {
        throw new Error(`Error Code: ${response.status}`)
      }
      return response.json()
    })
    .then(data => {
      setError(null)
      console.log('Data: ', data)
      const extractedData:Types.AnimeData = {
        id: data.id,
        title: data.title,
        mean: data.mean,
        num_list_users: data.num_list_users,
        media_type: data.media_type,
        status: data.status,
        num_episodes: data.num_episodes,
        start_season: {
          year: data.start_season.year,
          season: data.start_season.season
        }
      }
      setData(extractedData)
    })
    .catch(error => {
      setError(error.message)
      setData(null)
      console.error('Error: ', error)
    })
}

const displayResult: Types.DisplayResultFunction = () => {
  if (error) {
    return `Error: ${error}`
  } else if (data) {
    return `
    ID: ${JSON.stringify(data?.id, null, 2)}  
    Title: ${JSON.stringify(data?.title, null, 2)}  
    Mean: ${JSON.stringify(data?.mean, null, 2)}  
    Members: ${JSON.stringify(data?.num_list_users, null, 2)}  
    Type: ${JSON.stringify(data?.media_type, null, 2)}  
    Status: ${JSON.stringify(data?.status, null, 2)}  
    Episodes: ${JSON.stringify(data?.num_episodes, null, 2)}  
    Season: ${JSON.stringify(data?.start_season?.season, null, 2)}, ${JSON.stringify(data?.start_season?.year, null, 2)}`
  }
}

const RequestForm: React.FC = () => {
  return (
      <Box>
        <Box>
          <Center>
            <Input
              size="lg"
              w="70%"
              placeholder="Input ID"
              color="grey"
              onChange={idChange}
              value={animeId}
              />
          </Center>
          <Center>
            <Button style={computeButton} onClick={fetchAnimeData}>
              COMPUTE
            </Button>
          </Center>
    </Box>
    <Box>
    <Center>
      <Textarea 
        value={displayResult()}
        placeholder="Data will be displayed here"
        w="50%"
        h={250}
        readOnly/>
    </Center>
  </Box>
  </Box>
  )
}

export default RequestForm