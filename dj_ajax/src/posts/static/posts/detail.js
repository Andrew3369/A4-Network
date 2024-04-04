console.log("hello world detail")

const backBtn = document.getElementById('back-btn')
// const deleteBtn = document.getElementById('delete-btn')
// const updateBtn = document.getElementById('update-btn')

backBtn.addEventListener('click', ()=>
{
    history.back()
})