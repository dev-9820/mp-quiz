import NextLink from 'next/link'
import {
    Container,
    Box, Link, Stack, Heading,
    Flex, Menu, MenuItem, MenuList, MenuButton,
    IconButton, useColorModeValue
} from '@chakra-ui/react'
import { FaHamburger, FaUser } from 'react-icons/fa'

const Navbar = () => {
    return(
        <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between">
        <p type="brand">SOLVEIT</p>
        <button type="signout">SIGNOUT</button>
    </Container>
)
    }

export default Navbar;