import {ReactSocialMediaIcons} from 'react-social-media-icons';



function Footer(){
    return(
       <div className="footer">
         <div className="icon">Follow Us! </div>
            <div className="footer-links">
                  <ReactSocialMediaIcons
                     className="icon"
                     borderColor="rgba(242,233,233,0.25)"
                     icon="github"
                     iconColor="rgba(1,0,15,1)"
                     backgroundColor="rgba(255,255,255,1)"
                     iconSize="5"
                     roundness="25%"
                     url="https://github.com/JF5366/Clothing-API"
                     size="37"
                  />{" "}
                  <ReactSocialMediaIcons
                  className="icon"
                  borderColor="rgba(255,255,255,0.25)"
                  icon="facebook"
                  iconColor="rgba(0,0,0,1)"
                  backgroundColor="rgba(255,255,255,1)"
                  iconSize="5"
                  roundness="25%"
                  url="https://www.facebook.com/StyleClothing"
                  size="37"
                  />{" "}
                  <ReactSocialMediaIcons
                  className="icon"
                  borderColor="rgba(255,255,255,0.25)"

                  icon="instagram"
                  iconColor="rgba(0,0,0,1)"
                  backgroundColor="rgba(255,255,255,1)"
                  iconSize="5"
                  roundness="25%"
                  url="http://www.instagram.com/jennioutside"
                  size="37"
                  />{" "}
                  <ReactSocialMediaIcons
                   className="icon"
                   borderColor="rgba(255,255,255,0.25)"
                  icon="twitter"
                  iconColor="rgba(0,0,0,1)"
                  backgroundColor="rgba(255,255,255,1)"
                  iconSize="5"
                  roundness="25%"
                  url="https://twitter.com/StyleClothing"
                  size="37"
                  />
            </div>
            <p>
             &copy; 2023 <strong>Chip</strong> - The Style Store
            </p>
         
         </div>
    )
   }
   
   export default Footer;