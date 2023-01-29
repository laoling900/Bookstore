import React from 'react';
import { Container } from 'reactstrap';
import  NavMenu  from './NavMenu';


const Layout = ({children}) => {

    return (
        <div>
            <NavMenu />
            <Container>
                {children}
            </Container>
        </div>
        )

}

export default Layout;


//export class Layout extends Component {
//  static displayName = Layout.name;

//  render() {
//    return (
//      <div>
//        <NavMenu />
//        <Container>
//          {this.props.children}
//        </Container>
//      </div>
//    );
//  }
//}
