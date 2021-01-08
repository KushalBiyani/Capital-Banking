import React from 'react';
import Header from '../Header';
import Footer from '../Footer';



/**
* @author
* @function Layout
**/

const Layout = (props) => {   /**using this page to make a smooth and skeloton layton for all pages */
  return(
    <>
        <Header />
        {props.children}
        <Footer/>
    </>
   )

 }

export default Layout 