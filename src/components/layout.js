
import React from 'react';
import {Link} from 'gatsby';
import {IdentityContextProvider} from 'react-netlify-identity-widget';
import './layout.css';

const Layout = ({children}) => (
  <IdentityContextProvider url="https://mystifying-shockley-1d9bd7.netlify.com">
    <header>
      <Link to="/">JAMStack App</Link>
    </header>
    <main>{children}</main>
  </IdentityContextProvider>
)

export default Layout;
