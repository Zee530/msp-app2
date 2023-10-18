import {
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
import titles from "./shows";

function App() {
  const [anime, setAnime] = React.useState("");
  const [threadData, setThreadData] = React.useState("");

  const selecthandleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAnime(e.target.value);
  };

  const textareahandleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setThreadData(e.target.value);
  };
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

  function compute() {
    if (anime === "") {
      alert("Select an anime below");
    } else {
      alert(`You have selected ${anime}`);
    }
  }

  return (
    <Container maxW="container.xl">
      <Stack direction='column' spacing={20}>
        <Stack spacing={0}>
        <Text fontSize="4xl" fontWeight="normal" fontFamily="ultra, sans-serif">
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
              value={anime}
              onChange={selecthandleChange}
            >
              {titles.map(( title, index) => {
                return <option key={index} value={title.score}>{title.title}</option>
              })}
              {/* <option value="anime1">Title 1</option>
              <option value="anime2">Title 2</option>
              <option value="anime3">Title 3</option> */}
            </Select>
          </Center>
          <Center>
            <Button style={computeButton} onClick={compute}>
              COMPUTE
            </Button>
          </Center>
        </Box>
        <Box>
          <Center>
          <Textarea
            value={threadData}
            // value = {titles[0].members}
            onChange={textareahandleChange}
            placeholder="Data will be displayed here"
            w='50%'
          />
          </Center>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
