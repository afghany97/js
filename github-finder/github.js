class GitHub{
    constructor(){
        this.clientID = "07c7284db3f0b580c9f5";
        this.clientSecret = "f1640a399b3e3ea9c3351c892b1ef534bae1c99a";
    }

    async getUser(user)
    {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`);

        const profile = await profileResponse.json();

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.clientID}&client_secret=${this.clientSecret}`);

        const repos = await reposResponse.json();

        return {
            profile,
            repos
        };
    }
}