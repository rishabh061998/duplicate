import {Box,Button,styled} from '@mui/material';
import {useNavigate} from'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { useState } from 'react';

import {payUsingPaytm} from '../../service/api';
import {post} from '../../utils/paytm'

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}));



const Image = styled('img')({
    padding: '15px',
   
    
});

const StyledButton = styled(Button)(({theme})=>({
    width: '48%',
    borderRadius: 2,
    height: 50,
    [theme.breakpoints.down('lg')]:{
        width:'46%'
    },
    [theme.breakpoints.down('sm')]:{
        width:'48%'
    }
  
}));


const ActionItem=({product})=>{

    const navigate = useNavigate();
const dispatch=useDispatch();
const [quantity,setQuantity]=useState(1)

const {id}=product;

const addItemToCart=()=>{
    dispatch(addToCart(id,quantity));
      navigate('/cart');
}

const buyNow= async ()=>{
 let response= await payUsingPaytm({amount:500,email:'rishi.march25@gmail.com'});
 let information={
     action: 'https://securegw-stage.paytm.in/order/process',
     params:response
 }
 post(information);
}

    return(
<LeftContainer>
    <Box style={{padding:'15px 20px',border:'1px solid #f0f0f0',width: '90%'}}>
    <Image src={product.detailUrl} alt="product"></Image>
    </Box>
    <StyledButton variant="contained" onClick={()=>addItemToCart()} style={{marginRight: 10, background: 'teal'}}>Add to cart</StyledButton>
    <StyledButton variant="contained" onClick={()=>buyNow()} style={{background: 'purple'}}>Buy now</StyledButton>
</LeftContainer>
    )
}

export default ActionItem