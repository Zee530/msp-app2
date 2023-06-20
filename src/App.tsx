import {
  Box,
  Button,
  Center,
  Container,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

function App() {
  const buttonStyle = {
    color: "white",
    background: "inherit",
  };
  return (
    <Container maxW="container.xl">
      {/* <Center> */}
      <Text
        // bgGradient="linear(to-r, green, red)"
        // bgClip="text"
        fontSize="4xl"
        fontWeight="normal"
        // color='white'
        fontFamily="ultra, sans-serif"
      >
        MAL Score Progressions
      </Text>
      {/* </Center> */}
      <Box bgColor="#2e51a2">
        <Center>
          <List display="flex" justifyContent="space-around" w="50%">
            <Link>
              <ListItem>
                <Button style={buttonStyle}>WINTER</Button>
              </ListItem>
            </Link>
            <Link>
              <ListItem>
                <Button style={buttonStyle}>SPRING</Button>
              </ListItem>
            </Link>
            <Link>
              <ListItem>
                <Button style={buttonStyle}>SUMMER</Button>
              </ListItem>
            </Link>
            <Link>
              <ListItem>
                <Button style={buttonStyle}>FALL</Button>
              </ListItem>
            </Link>
          </List>
        </Center>
      </Box>
    </Container>
  );
}

export default App;
