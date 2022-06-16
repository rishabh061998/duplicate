import { useState } from 'react';

import {AppBar,Toolbar,IconButton,Box,Typography,List,ListItem,Drawer,styled} from '@mui/material';


import {Menu} from '@mui/icons-material';
import Search from './Search';
import CustomButtons from './CustomButtons';
import {Link} from 'react-router-dom';

const StyledHeader=styled(AppBar)`
background:black;
height:55px;
`;
const Component=styled(Link)`
margin-left:12%;
line-height:0;
text-decoration:none;
color:inherit;

`;

const SubHeading=styled(Typography)`
font-size:10px;
font-style:italic;
`;
const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
    margin: '0 5% 0 auto', 
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));

const Header=()=>{
    const logoURL = 'https://penji.co/wp-content/uploads/2019/06/ebay-ecommerce-logo.jpg';

    const [open,setOpen]=useState(false)

const handleOpen=()=>{
    setOpen(true);
}
const handleClose=()=>{
    setOpen(false);
}

const list = () => (
    <Box style={{ width: 200 }} onClick={handleClose}>
        <List>
            <listItem button>
                <CustomButtons />
            </listItem>
        </List>
    </Box>
);

    return(
       <StyledHeader>
           <Toolbar style={{minHeight:55}}>
        <MenuButton color="inherit"  onClick={handleOpen}>
         <Menu/>
        </MenuButton>

        <Drawer open={open} onClose={handleClose}>
        {list()}
                </Drawer>

                <Component to='/'>
                   <img src={logoURL} alt="logo" style={{width:75}}></img> 
                   <Box style={{display:'flex'}}>
                       <SubHeading>Explore&nbsp;
                           
                           <Box component="span" style={{color:'#FFE500'}}>Plus</Box>
                           </SubHeading>
                   </Box>
                </Component>
                <Search/>
                <CustomButtonWrapper>
                <CustomButtons/>
                </CustomButtonWrapper>
           </Toolbar>
       </StyledHeader>
    )
}


export default Header