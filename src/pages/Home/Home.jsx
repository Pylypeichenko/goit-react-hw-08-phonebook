import { Container } from 'components/common.styled';
import { HomeTitleWrapper } from './Home.styled';

export default function HomePage() {
  return (
    <Container>
      <HomeTitleWrapper>
        <h1>Welcome to your own book of contacts</h1>
      </HomeTitleWrapper>
    </Container>
  );
}
