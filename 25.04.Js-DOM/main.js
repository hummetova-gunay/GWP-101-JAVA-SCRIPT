let body=document.querySelector('body')
let header=document.createElement('header')
let nav=document.createElement('nav')
let ul=document.createElement('ul')
let liHome=document.createElement('li')
let liAbout=document.createElement('li')
let liBlog=document.createElement('li')
let liContact=document.createElement('li')
let sectionHome=document.createElement('section')
let sectionAbout=document.createElement('section')
let sectionBlog=document.createElement('section')
let sectionContact=document.createElement('section')
document.body.append(header)
body.append(sectionHome)
body.append(sectionAbout)
header.append(nav)
nav.append(ul)
ul.append(liHome)
ul.append(liAbout)
ul.append(liBlog)
ul.append(liContact)

liHome.innerHTML="<strong>Home</strong>"
liAbout.innerHTML="<strong>About</strong>"
liBlog.innerHTML="<strong>Blog</strong>"
liContact.innerHTML="<strong>Contact</strong>"
sectionHome.innerHTML="<h2>Home</h2>"
sectionAbout.innerHTML="<h2>About</h2>"

header.style.background='black'
header.style.padding='5px'

ul.style.display='flex'
ul.style.justifyContent='space-around'
ul.style.listStyle='none'

liHome.style.color='white'
liHome.style.cursor="pointer"
liAbout.style.color='white'
liAbout.style.cursor="pointer"
liBlog.style.color='white'
liBlog.style.cursor="pointer"
liContact.style.color='white'
liContact.style.cursor="pointer"

sectionHome.id=('home')
sectionAbout.id=('about')
sectionBlog.id=('blog')
sectionContact.id=('contact')

sectionHome.style.height='100vh'
sectionHome.style.display='flex'
sectionHome.style.justifyContent='center'
sectionHome.style.alignItems='center'
sectionHome.style.margin='5px'
sectionHome.style.border="2px  dashed black"

sectionAbout.style.height='100vh'
sectionAbout.style.display='flex'
sectionAbout.style.justifyContent='center'
sectionAbout.style.alignItems='center'
sectionAbout.style.margin='5px'
sectionAbout.style.border="2px  dashed black"

liHome.addEventListener('click',function(){
     window.location='#home'
})
liAbout.addEventListener('click',function(){
     window.location='#about'
})




