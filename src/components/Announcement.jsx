import styled from 'styled-components';

const Container = styled.div`
  height: 1.5rem;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
      Amazing Deal! Free Shipping on Orders over $50!!
    </Container>
  )
}

export default Announcement
