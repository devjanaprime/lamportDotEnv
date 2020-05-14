const express = require( 'express' );
const app = express();
const axios = require( 'axios' );
const dotenv = require( 'dotenv' );
dotenv.config();

// test to see if GIPHY_API_KEY is available through dotenv
console.log( 'GIPHY_API_KEY:', process.env.GIPHY_API_KEY );

const port = process.env.PORT || 5000;

app.listen( port, ()=>{
    console.log( 'server up on:', port );
})

app.get( '/trending', ( req, res )=>{
    // make a request to giphy here using your API key
    console.log( '/trending GET' );
    axios.get( 'http://api.giphy.com/v1/gifs/trending?api_key=' + process.env.GIPHY_API_KEY + '&rating=pg').then( ( response )=>{
        res.send( response.data );
    }).catch( ( err )=>{
        console.log( err );
        res.send( 500 );
    })
})