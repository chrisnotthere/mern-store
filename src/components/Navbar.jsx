import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Search } from '@mui/icons-material';

const Container = styled.div`
  height: 60px;
  /* background-color: black; */
  /* color: white; */
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
`

const Language = styled.span`
  font-size: 1rem;
  cursor: pointer;
`

const SearchContainer = styled.div`
  border: 1px solid lightgrey;
`

const Center = styled.div`
  flex:1;
`

const Right = styled.div`
  flex:1;
`

const Navbar = () => {
  return (
    <Container >
      <Wrapper>
        <Left>
          <Language>
            EN
          </Language>
          <SearchContainer>
            input
            <Search/>
          </SearchContainer>
        </Left>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
