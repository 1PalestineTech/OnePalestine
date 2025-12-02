import {Navbar} from '../components/Navbar.js'
import {Footer} from '../components/Footer.js'

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