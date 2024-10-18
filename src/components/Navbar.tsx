import { Box, Button, Center, List, ListItem } from '@chakra-ui/react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { requestType } from '../arrays/RequestType'


const Navbar: React.FC = () => { 
    const buttonStyle: React.CSSProperties = {
        color: "white",
        background: "inherit",
        //To be removed when i figure out custom button theming
      };
  return (
    <Box bgColor="#2e51a2">
            <Center>
              <List display="flex" justifyContent="space-around" w="50%">
                {requestType.map((request) => (
                  <NavLink to='/'>
                    <ListItem>
                      <Button style={buttonStyle}>{request}</Button>
                    </ListItem>
                  </NavLink>
                ))}
              </List>
            </Center>
          </Box>
  )
}

export default Navbar