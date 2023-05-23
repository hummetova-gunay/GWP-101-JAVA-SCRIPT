let id = new URLSearchParams(window.location.search).get("id")
// console.log(id);
let editTitle=document.querySelector('#editTitle')
let editBody=document.querySelector('#editBody')
let form=document.querySelector('form')
let filteredData=[]
function editUser(){
    axios('http://localhost:3000/blogs').then((res)=>{
        // console.log(res.data);
    filteredData=res.data.filter(item=>item.id==id)
    // console.log(filteredData);
    filteredData.forEach(element => {
        editTitle.value=element.title
        editBody.value=element.body
    });
    })
   form.addEventListener('submit',function(e){
    e.preventDefault()
    let obj={
        title: editTitle.value,
        body: editBody.value,
    }
    axios.patch(`http://localhost:3000/blogs/${id}`,obj)
    window.location='index.html'
   })
}
editUser()

