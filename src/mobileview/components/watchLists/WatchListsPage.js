import React from 'react'
import { Container, Box, Typography, Grid, Button } from '@material-ui/core'
// import SearchIcon from '@mui/icons-material/Search';
// import { makeStyles } from '@mui/styles';


//Images
import ProductImg1 from "../../../assets/mobImages/item1.png";
import ProductImg2 from "../../../assets/mobImages/item2.png";
import ProductImg3 from "../../../assets/mobImages/item3.png";
import ProductImg4 from "../../../assets/mobImages/item4.png";


function WatchListsPage() {


    const WatchListItems = [


        {
            id: 1,
            img: ProductImg1,
            productName: "Refort 200ml Syrup",
            size: "Pack Size 100ml",
            priceTitle: "MRP ₹00.00",
            total: "₹57.00", 
            sellerName: "Maheerveer Medi-Sales Pvt. Ltd.",
            contains: "Sodium Picosul...",
            cart: "Add To Cart",
            favourites: "Fav",
        },
        {
            id: 2,
            img: ProductImg2,
            productName: "Refort 200ml Syrup",
            size: "Pack Size 100ml",
            priceTitle: "MRP ₹00.00",
            total: "₹57.00", 
            sellerName: "Maheerveer Medi-Sales Pvt. Ltd.",
            contains: "Sodium Picosul...",
            cart: "Add To Cart",
            favourites: "Fav",
        },
        {
            id: 3,
            img: ProductImg3,
            productName: "Refort 200ml Syrup",
            size: "Pack Size 100ml",
            priceTitle: "MRP ₹00.00",
            total: "₹57.00", 
            sellerName: "Maheerveer Medi-Sales Pvt. Ltd.",
            contains: "Sodium Picosul...",
            cart: "Add To Cart",
            favourites: "Fav",
        },
        {
            id: 4,
            img: ProductImg4,
            productName: "Refort 200ml Syrup",
            size: "Pack Size 100ml",
            priceTitle: "MRP ₹00.00",
            total: "₹57.00", 
            sellerName: "Maheerveer Medi-Sales Pvt. Ltd.",
            contains: "Sodium Picosul...",
            cart: "Add To Cart",
            favourites: "Fav",
        },
                
    ]



    return (
        <Container>
                <Box sx={{
                    display : 'flex',
                    justifyContent: 'space-between',
                    marginTop: '16px',
                    fontFamily: 'Quicksand-Medium',
                    fontSize: '12px',
                    color: '#2e3e6a'
                    }}>
                    <Typography variant='h6'>All Products</Typography>
                    {/* <SearchIcon></SearchIcon> */}
                    
                </Box>
                {
                WatchListItems.map( ({ img, productName, size, priceTitle, contains, sellerName, total, cart, favourites }, id) => (
                <div className="watchlist-grid">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                                <img src={img} alt="photos"/>
                                <h5>{productName}</h5>
                                <p>{size}</p> 
                                <h6>{priceTitle}</h6>
                                <b>{total}</b>
                                <p>Seller Name : {sellerName}</p>
                                <p>Contains : {contains}</p>
                                <Button>{cart}</Button><span>{favourites}</span>
                        </Grid>
                    </Grid>
                </div>    
                ))}
        </Container>
    )
}

export default WatchListsPage
