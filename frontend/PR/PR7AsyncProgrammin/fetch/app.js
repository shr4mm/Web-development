async function getUsers(names) {
    const requests = names.map(async name => {
        try {
            const response = await fetch(`https://api.github.com/users/${name}`);
            if (!response.ok) {
                return null;
            }
            const user = await response.json();
            return user;
        } catch (error) {
            return null;
        }
    });

    const results = await Promise.all(requests);

    return results;
}

getUsers(['octocat', 'defunkt', 'nonexistentuser'])
    .then(users => console.log(users))
    .catch(error => console.error(error));
