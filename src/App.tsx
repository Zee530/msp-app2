import {
  Alert,
  Box,
  Button,
  Center,
  Container,
  Input,
  Link,
  List,
  ListItem,
  Select,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import titles, { Show } from "./shows";
import Navbar from "./components/Navbar";

interface AnimeData {
  id?: number,
  title? : string,
  mean? : number,
  num_list_users? : number,
  media_type? : string,
  status? : string,
  num_episodes? : number,
  start_season? : {
    year? : number,
    season: string
  }
}

// interface DisplayResultProps {
//   error?: string | null,
//   data?: {id: number, title: string}
// }
type DisplayResultFunction = () => string | undefined

function App() {
  // const [anime, setAnime] = React.useState("");
  // const [threadData, setThreadData] = React.useState("");
  const [selectedTitle, setSelectedTitle] = React.useState<Show | null>(null);
  // const [textareaContent, setTextareaContent] = React.useState('')

  const [data, setData] = React.useState<AnimeData | null>(null)
  const [error, setError] = React.useState<string | null>(null)
  const [animeId, setAnimeid] = React.useState<string>('')

  const selecthandleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const title = titles.find(t => t.title === e.target.value);
    setSelectedTitle(title ? title : null);
  };

  const idChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputtedID = event.target.value
    setAnimeid(inputtedID)
  }

  // const textareahandleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setThreadData(e.target.value);
  // };
  // const buttonStyle: React.CSSProperties = {
  //   color: "white",
  //   background: "inherit",
  //   To be removed when i figure out custom button theming
  // };

  const computeButton: React.CSSProperties = {
    top: "30px",
    backgroundColor: "#2e51a2",
    color: "white",
    width: "250px",
    height: "50px",
  };

  // const seasons: string[] = ["WINTER", "SPRING", "SUMMER", "FALL"];

  // function compute() {
  //   if (selectedTitle === null) {
  //     setTextareaContent("")
  //     alert("Select an anime below");
  //   } else {
  //     // setArrayValue()
  //     setTextareaContent(`Week 01 - ${selectedTitle.score}, ${selectedTitle.members} Members`)
  //   }
  // }

  const fetchAnimeData = async() => {
    setData(null)
    setError(null)

    const url = new URL(`/api/mal/anime/${animeId}`, 'http://localhost:3001')
    // const params = new URLSearchParams({
    //   fields: 'id,title,mean,num_list_users'
    // })
    // const response = await
     fetch(url 
      // + '?' + params.toString()
    )
    // console.log(await response)
    
      .then(response => {
        console.log('Status Code:', response.status);
        console.log('Response: ', response);
        if (!response.ok) {
          throw new Error(`Error Code: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        // setData(JSON.stringify(data, null, 2))
        setError(null)
        console.log('Data: ', data)
        const extractedData:AnimeData = {
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
        // console.log(data)
      })
      // if (error) {
      //   alert('There was an Error')
      // } else {
      //   alert(data)
      // }
      // alert(data)
      // console.log(data)
      // console.log(error)
  }

  const displayResult: DisplayResultFunction = () => {
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

  return (
    <Container maxW="container.xl">
      <Stack direction="column" spacing={20}>
        <Stack spacing={0}>
          <Text
            fontSize="4xl"
            fontWeight="normal"
            fontFamily="ultra, sans-serif"
          >
            MAL Score Progressions
          </Text>
          <Navbar />
          {/* <Box bgColor="#2e51a2">
            <Center>
              <List display="flex" justifyContent="space-around" w="50%">
                {seasons.map((season) => (
                  <Link>
                    <ListItem>
                      <Button style={buttonStyle}>{season}</Button>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Center>
          </Box> */}
        </Stack>
        <Box>
          <Center>
            {/* <Select
              size="lg"
              w="70%"
              placeholder="Select Title"
              color="grey"
              onChange={selecthandleChange}
            >
              {titles.map((title, index) => (
                <option key={index} value={title.title}>
                  {title.title}
                </option>
              ))}
            </Select> */}
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
          {/* <Center>
              {error ? (
            <p>Error: {error}</p>
          ) : data ? (
            <pre>{JSON.stringify(data, null, 2)}</pre>
          ) : (
            <p>No data fetched yet.</p>
          )}
          </Center> */}
        </Box>
        <Box>
          <Center>
            {/* {selectedTitle && (
              <Textarea
                value={`Week 01 - ${selectedTitle.score}, ${selectedTitle.members}`}
                // value = {titles[0].members}
                // onChange={textareahandleChange}
                placeholder="Data will be displayed here"
                w="50%"
                readOnly
              />
            )} */}
            <Textarea 
              value={displayResult()}
              placeholder="Data will be displayed here"
              w="50%"
              h={250}
              readOnly/>
          </Center>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
