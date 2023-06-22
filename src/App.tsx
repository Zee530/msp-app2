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
  const buttonStyle:React.CSSProperties = {
    color: "white",
    background: "inherit",
  };

  const seasons:string[] = ['WINTER', 'SPRING', 'SUMMER', 'FALL']

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
    </Container>
  );
}

export default App;
