const axios = require('axios');

exports.hackerrank = async (req, res) => {
    const username = req.params.user_id; 
    console.log(username)
    await axios.get(`https://www.hackerrank.com/rest/hackers/${username}/badges`)
    .then(response => {
        const data = response.data;
        // console.log(data)
        return res.status(200).json({ data });
    })  
    .catch( (error) => {
        console.log(error);
        res.status(400).json({ message: "Error occurred while fetching data for code hackerrank!", })    
    });
}