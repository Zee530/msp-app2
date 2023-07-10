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
import React from "react";

function App() {
  const [anime, setAnime] = React.useState('')

  const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setAnime(e.target.value)
  }

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


  function compute() {
    if (anime === '') {
      alert('Select an anime below')
    } else {
      alert(`You have clicked on ${anime}`)
    }
  }

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
        <Select size='lg' w='70%' placeholder="Select Anime" color='grey' value={anime} onChange={handleChange}>
          <option value='anime1'>Anime 1</option>
          <option value='anime2'>Anime 2</option>
          <option value='anime3'>Anime 3</option>
        </Select>
        </Center>
        <Center>
            <Button style={computeButton} onClick={compute}>COMPUTE</Button>
        </Center>
      </Box>
    </Container>
  );
}

export default App;
