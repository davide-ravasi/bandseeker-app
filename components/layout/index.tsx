import styled from 'styled-components';

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

interface LayoutProps {
  children: React.ReactNode;
  isBlock: boolean;
}

const Layout = ({ children, isBlock }: LayoutProps) => {
  return (
    <div>
      <Header />
      <Container isBlock={isBlock}>
        {children}
      </Container>
      <Footer />
    </div>
  )
}

export default Layout;

const Container = styled.div<{ isBlock: boolean }>`
  position: relative;
  display: ${props => props.isBlock ? 'block' : 'flex'};
  justify-content: flex-start;

  max-width: 1100px;
  min-height: calc(100vh - 180px);
  margin: 30px auto;
`;