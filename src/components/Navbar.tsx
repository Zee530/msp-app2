import { Box, Button, Center, List, ListItem } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { requestType } from '../core/Types'
import { buttonStyle } from '../core/Styles'

const Navbar: React.FC = () => { 

  return (
    <Box bgColor="#2e51a2">
            <Center>
              <List display="flex" justifyContent="space-around" w="50%">
                {requestType.map((request) => (
                  <NavLink to={request.link}>
                    <ListItem>
                      <Button style={buttonStyle}>{request.type}</Button>
                    </ListItem>
                  </NavLink>
                ))}
              </List>
            </Center>
          </Box>
  )
}

export default Navbar