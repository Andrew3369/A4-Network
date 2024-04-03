console.log('hello world!');

const helloWorld = document.getElementById('hello-world');

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