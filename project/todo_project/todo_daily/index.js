const axios = require('axios')


axios.head('https://en.wikipedia.org/wiki/Special:Random')
    .then(response => {
        console.log(response.request.res.responseUrl)
        const url = response.request.res.responseUrl
        const content = `Read: ${url}`
        const todo = {
            content: content
        }
        console.log(todo)
        axios.post('http://todoserver-svc:2345/todos', todo)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    })
