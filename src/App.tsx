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
import titles, { Show } from "./shows";

function App() {
  // const [anime, setAnime] = React.useState("");
  // const [threadData, setThreadData] = React.useState("");
  const [selectedTitle, setSelectedTitle] = React.useState<Show | null>(null);
  const [textareaContent, setTextareaContent] = React.useState('')

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

  function compute() {
    if (selectedTitle === null) {
      alert("Select an anime below");
    } else {
      // setArrayValue()
      setTextareaContent(`Week 01 - ${selectedTitle?.score}, ${selectedTitle?.members} Members`)
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
            <Button style={computeButton} onClick={compute}>
              COMPUTE
            </Button>
          </Center>
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
              value={textareaContent} 
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
