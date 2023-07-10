import React from 'react';

function Footer(props) {
    return(
      <footer className={props.darkMode ? "dark": ""}>
        <small>@2023 victor development. All rights reserved.</small>
      </footer>
    )
  }
  
  export default Footer;