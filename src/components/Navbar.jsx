import styled from 'styled-components'
import { Search } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
  height: 4rem;
`

const Wrapper = styled.div`
  padding: 0.75rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  padding: 0.25rem;
`

const Input = styled.input`
  border: none;
`

const Center = styled.div`
  flex:1;
`

const Logo = styled.h1`
  font-weight: 700;
  text-align: center;
`

const Right = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const MenuItem = styled.div`
  font-size: 0.9rem;
  cursor: pointer;
  margin-left: 1.5rem;
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
            <Input />
            <Search style={{color:'gray', fontSize:16}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>MERN Store</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
