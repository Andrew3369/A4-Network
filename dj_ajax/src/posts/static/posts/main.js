console.log('hello world!');

const helloWorld = document.getElementById('hello-world');
const postsBox = document.getElementById('posts-box');

helloWorld.textContent = 'Hello World!';
helloWorld.innerHTML = '<b>Hello World!<b>';

$.ajax({
    type: 'GET',
    url: '/hello-world/',
    success: function(response) 
    {
        //console.log('success', response)
        console.log('success', response.text)
        helloWorld.textContent = response.text
    },
    error: function(error)
    {
        //console.log('error', error)
        console.log('error', error.text)
    },
})


$.ajax({
    type: 'GET',
    url: '/data/',
    success: function(response) 
    {
        console.log(response)
        const data = response.data
        console.log(data)
        data.forEach(element => {
            postsBox.innerHTML += `
                ${element.id} - <b>${element.body}</b><br>
            `
            console.log(element)
        });
    },
    error: function(error)
    {
        console.log(error)
    },
})