import MoveWindows from "./MoveWindows";
import Redes from "./Redes";
import Container from "./common/Container";
import Footer from "./common/Footer";
import Navbar from "./navbar/Navbar";

interface itemNavbar {
  children:React.ReactNode
}

const Layout: React.FC<itemNavbar> = ({ children }) => {
  return (
    <>
      <Navbar/>
      
        <MoveWindows>
          <Container>
            {children}
          </Container>
        </MoveWindows>
      
      <Redes />
      <hr />
      <Footer />

    </>
  )
};

export default Layout;
