import {NavLink as ReactLink, useNavigate} from "react-router-dom";
import { Navigate } from "react-router-dom";
// import {useNavigate} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
  } from 'reactstrap';

const CustomNavbar=()=>{

  const navigate=useNavigate();
const user= JSON.parse(localStorage.getItem('user-info'))
console.warn(user)

function logout()
{
  localStorage.clear();
  navigate('/')
}
function platinum(){
    navigate('/Platinum')
}
function Gold(){
  navigate('/Gold')
}
function Silver(){
  navigate('/Silver')
}
    return(
<div>
    <Navbar
    color="black"
    dark
    expand="md"
    fixed=""
    >
<NavbarBrand href="/">
<img
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-nqKXACj55IVAx7-8cH7JCmnEkzxI_YLyQ&usqp=CAU" 
  // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhrPRxJ8jwWagmNSgN2OUDSzW6Kvj3mebsg&usqp=CAU"
        style={{
          height: 50,
          width: 90
        }}
      />
<b>MEETME</b> 

</NavbarBrand>
<NavbarToggler onClick={function noRefCheck(){}}/>
<Collapse navbar>
    <Nav
className="me-auto"
navbar>
    <NavItem>
        <NavLink href="/about">
        About
        </NavLink>
    </NavItem>
{/* <NavItem>
    <NavLink href="/login">
        Login
    </NavLink>
</NavItem> */}

 <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                 <DropdownItem> Services</DropdownItem> 
               <DropdownItem>ContactUs</DropdownItem>
               <DropdownItem onClick={logout}>Logout</DropdownItem>
                
              </DropdownMenu>
            </UncontrolledDropdown> 
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Membership
              </DropdownToggle>
              <DropdownMenu left>
                 <DropdownItem onClick={platinum}> Platinum</DropdownItem> 
               <DropdownItem onClick={Gold}>Gold</DropdownItem>
               <DropdownItem onClick={Silver}>Silver</DropdownItem>
               
                
              </DropdownMenu>
            </UncontrolledDropdown> 
          </Nav>
          


      {/* <img
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-nqKXACj55IVAx7-8cH7JCmnEkzxI_YLyQ&usqp=CAU" 
  // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhrPRxJ8jwWagmNSgN2OUDSzW6Kvj3mebsg&usqp=CAU"
        style={{
          height: 50,
          width: 90
        }}
      />
          */}
        </Collapse>
      </Navbar>
    </div>
    )
}

export default CustomNavbar;


















/* // import React, { useState } from 'react';
// import { */
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText,
// } from 'reactstrap';

// function CustomNavbar(args) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar {...args}>
//         <NavbarBrand href="/">reactstrap</NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="me-auto" navbar>
//             <NavItem>
//               <NavLink href="/components/">Components</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="https://github.com/reactstrap/reactstrap">
//                 GitHub
//               </NavLink>
//             </NavItem>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Options
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>Option 1</DropdownItem>
//                 <DropdownItem>Option 2</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem>Reset</DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//           </Nav>
//           <NavbarText>Simple Text</NavbarText>
//         </Collapse>
//       </Navbar>
//     </div>
//   )
// }

// export default CustomNavbar;