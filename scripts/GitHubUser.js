export class GitHubUser {
  static search(username){
    const endponit = `https://api.github.com/users/${username}`

    return fetch(endponit)
    .then((data) => data.json())
    .then((data) => ({
      login: data.login,
      name: data.name,
      public_repos: data.public_repos,
      followers: data.followers,
    }))
  }
}