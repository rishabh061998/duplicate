import { Typography,Box,styled } from "@mui/material"
import {LocalOffer as Badge} from '@mui/icons-material'


const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`;
const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: red;
    font-size: 15px;
`;

const ProductDetail=({product})=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    return(
        <>
            <Typography>{product.title.longTitle}</Typography>
                     <Typography style={{marginTop:5,color:'#878787', fontSize:14}}>
                         8 Rating & 1 review
                         <Box component="span"><img src={fassured} style={{width:77 ,marginLeft:20}}></img></Box>
                         </Typography>
                         <Typography>
                             <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp; 
                             <Box component="span"style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp; 
                             <Box component="span" style={{ color: '#388E3C' }}>{product.price.discount}</Box>
                         </Typography>

                         <Typography>Available offers</Typography>
                         <SmallText>
                             <Typography><StyledBadge/>Get Extra 10% off</Typography>
                             <Typography><StyledBadge/>Get Extra 13% off </Typography>
                             <Typography><StyledBadge/>Sign up with google Pay and pay later</Typography>
                             <Typography><StyledBadge/>Buy 2 items and save 5%</Typography>
                             <Typography><StyledBadge/>5% extra discout on SBI card</Typography>
                         </SmallText>
        </>
    )
}


export default ProductDetail