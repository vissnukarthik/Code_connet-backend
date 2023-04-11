const axios = require('axios');

exports.leetcode = (req, res) => {
  const username = req.params.user_id; 
  const variables = { username: username }; 
  console.log(variables)

  const query = `
    query userProblemsSolved($username: String!) {
      allQuestionsCount { 
        difficulty
        count
      }
      matchedUser(username: $username) {
        problemsSolvedBeatsStats {
          difficulty
          percentage
        }
        submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
    }
  `;
  
  axios
    .post("https://leetcode.com/graphql", {
      query: query,
      variables: variables,
    })
    .then(function (response) {
      const data = response.data.data.matchedUser.submitStatsGlobal.acSubmissionNum;
      // console.log(data)
      return res.status(200).json({ data });
    })
    .catch(function (error) {
      return res.status(400).json({ message: "Error occurred while fetching data from the server!" });
    });
};


