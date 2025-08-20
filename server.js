const express = require('express')
const axios = require('axios')
const app = express()
const port = 3333

app.get('/api/fun-fact', async (req,res)=>{
try {
const apiResponse = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random')
const funFact = apiResponse.data.text

    res.json({fact: funFact})
}catch (error) {

    if(error.response) {
console.error('Error with API:', error.response.status, error.response.data)
   res.status(error.response.status).json({message: 'Error fetching data from external API'})
    }else {
        console.error('Error with network', error.message)
   res.status(500).json({error: 'Could not find fun fact'})
    } 
}
})

app.listen(port,() => {
    console.log(`Server is running at http://localhost:${port}`)
})