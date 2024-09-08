import {
  Alert,
  Box,
  Button,
  Center,
  Container,
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

interface AnimeData {
  id?: number,
  title? : string,
  mean? : number
}

function App() {
  // const [anime, setAnime] = React.useState("");
  // const [threadData, setThreadData] = React.useState("");
  const [selectedTitle, setSelectedTitle] = React.useState<Show | null>(null);
  // const [textareaContent, setTextareaContent] = React.useState('')

  const [data, setData] = React.useState<string | null>(null)
  const [error, setError] = React.useState<string | null>(null)

  const selecthandleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const title = titles.find(t => t.title === e.target.value);
    setSelectedTitle(title ? title : null);
  };

  // const textareahandleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setThreadData(e.target.value);
  // };
  const buttonStyle: React.CSSProperties = {
    color: "white",
    background: "inherit",
    //To be removed when i figure out custom button theming
  };

  const computeButton: React.CSSProperties = {
    top: "30px",
    backgroundColor: "#2e51a2",
    color: "white",
    width: "250px",
    height: "50px",
  };

  const seasons: string[] = ["WINTER", "SPRING", "SUMMER", "FALL"];

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

    const url = '/api/mal/anime/53410'
    const params = new URLSearchParams({
      fields: 'id,title,mean,'
    })
    // const response = await
     fetch(url + '?' + params.toString())
    // console.log(await response)
    
      .then(response => {
        console.log('Status Code:', response.status);
        console.log('Raw Response Body:', response.body);
        if (!response.ok) {
          throw new Error(`Error Code: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        setData(data)
        setError(null)
        console.log(data)
      })
      .catch(error => {
        setError(error.message)
        setData(null)
        console.error('Error: ', error)
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

  const displayResult = () => {
    if (error) {
      return error
    } else if (data) {
      return data
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
          <Box bgColor="#2e51a2">
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
          </Box>
        </Stack>
        <Box>
          <Center>
            <Select
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
              {/* <option value="anime1">Title 1</option>
              <option value="anime2">Title 2</option>
              <option value="anime3">Title 3</option> */}
            </Select>
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
              readOnly/>
          </Center>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
