import {Navbar} from '../components/Navbar.jsx'
import {Footer} from '../components/Footer.jsx'

export function Page(WrappedComponent){
    return function EnhancedComponent(props) {
    return (
        <>
        <Navbar />
        <WrappedComponent {...props} />
        <Footer/>
        </>
    );
  };
}