let blogTitle=document.querySelector('#blogTitle')
let textArea=document.querySelector('#textArea')
let authors=document.querySelector('#authors')
let singleAuthor;
let addBlog=document.querySelector('#addBlog')

authors.addEventListener('change',function(e){
    singleAuthor=e.target.value
})

addBlog.addEventListener('click', function(){
if(blogTitle.value&&textArea.value){
    let obj = {
        title: blogTitle.value,
        body: textArea.value,
        author:singleAuthor||'Lorem',
    }
        axios.post(`http://localhost:3000/blogs`, obj)
        window.location="index.html"
}else{
    alert('please fill out form')
}
})