fetch('https://api.github.com/users/HarshSahu1206')
.then( (response) =>{
    return response.json()
})
.then( (data) => console.log(data))
.catch( (error) => console.log(error)
)