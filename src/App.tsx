import {
  Box,
  Button,
  Center,
  Container,
  Link,
  List,
  ListItem,
  Select,
  Text,
} from "@chakra-ui/react";

function App() {
  const buttonStyle:React.CSSProperties = {
    color: "white",
    background: "inherit",
    //To be removed when i figure out custom button theming
  };

  const computeButton:React.CSSProperties = {
    top: '30px',
    backgroundColor: '#2e51a2',
    color: 'white',
    width: '250px',
    height: '50px'
  }

  const seasons:string[] = ['WINTER', 'SPRING', 'SUMMER', 'FALL']

  return (
    <Container maxW="container.xl">
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
            {seasons.map((season) => 
              <Link>
              <ListItem>
                <Button style={buttonStyle}>{season}</Button>
              </ListItem>
            </Link>  
            )}
          </List>
        </Center>
      </Box>
      <Box mt={100}>
        <Center>
        <Select size='lg' w='70%' placeholder="Select Anime">
          <option>Anime 1</option>
          <option>Anime 2</option>
          <option>Anime 3</option>
        </Select>
        </Center>
        <Center>
            <Button style={computeButton}>COMPUTE</Button>
        </Center>
      </Box>
    </Container>
  );
}

export default App;
