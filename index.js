function submitData (name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }, 
        body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com"
        })
    })
    .then(resp => (resp.json()))
    .then(function (object) {
        let newId = object.id
        document.querySelector('body').innerHTML = newId
    })
    .catch(function (message) {
        document.querySelector('body').innerHTML = message
    })
};