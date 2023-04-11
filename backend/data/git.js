const { Octokit } = require("@octokit/core");

const octokit = new Octokit({
  auth: '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'
});


exports.git= async(req,res) => {
    // console.log(req.params.user_id)
    const username  = req.params.user_id;
    await octokit.request('GET /users/{username}/repos', {
      username,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    }).then(response => {
        const data  = response.data
        // console.log(data)   
        const repos = data.map(repo => ({repo:repo.name,language:repo.languages_url,star:repo.stargazers_count,desc:repo.description,url:repo.html_url}))

        return res.status(200).json({ repos });
    }).catch(error => {
    //   console.error(error);
      return res.sendStatus(500); 
    });
}