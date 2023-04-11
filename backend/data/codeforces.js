const axios = require('axios');

exports.codeforces = async (req, res) => {
    const username = req.params.user_id; 
    await axios.get(`https://codeforces.com/api/user.status?handle=${username}`)
    .then(response => {
        const data = response.data.result;

         const final = data.filter( (prob) => prob.verdict == "OK" )
         const divA = final.filter( (prob) => prob.problem.index == "A" )
         const divB = final.filter( (prob) => prob.problem.index == "B" )
         const divC = final.filter( (prob) => prob.problem.index == "C" )

         console.log(divB.length);

         const codeforces = {
            total_problems: final.length,
            divA: divA.length,
            divB:divB.length,
            divC:divC.length
         }

        return res.status(200).json({ codeforces });
    })
    .catch( (error) =>res.status(400).json({ message: "Error occurred while fetching data for code codeforce!" }) );
}
