let slides= document.querySelectorAll(".slide");
let baricon = document.getElementById("bar")
let ul = document.querySelector("ul");
console.log(slides);
let count= 0;
slides.forEach(function(slide,index){
    slide.style.left = `${index * 100}%`;
})
function slider(){
    slides.forEach(function(curval){
        curval.style.transform = `translateX(-${count * 100}%)`;
        console.log(curval);

    })
}
setInterval(function(){
    count++;
    if(count==slides.lenght){
        count=0;
    }
    slider();
},2000)
                // navb
baricon.addEventListener("click" , function(){
    ul.classList.toggle("showitem");
    if(ul.classList=="showitem"){
        baricon.className = "fa-solid fa-xmark";

    }
    else{
        baricon.className = "fa-solid fa-bars";
    }

})


let sevetheme = localStorage.getItem('theme') || 'light';
document.body.className = sevetheme;
const toggleLight = document.getElementById('toggleLight');
const toggleDark = document.getElementById('toggleDark');

toggleLight.addEventListener('click',function(){
    document.body.className = 'light';
    localStorage.setItem('theme','light');
    toggleLight.classList.add('active');
    toggleDark.classList.remove('active');
});


toggleDark.addEventListener('click',function(){
    document.body.className = 'dark';
    localStorage.setItem('theme','dark');
    toggleDark.classList.add('active');
    toggleLight.classList.remove('active');
});
if(sevetheme==='light'){
    toggleLight.classList.add('active');
}
else{
    toggleDark.classList.add('active');

}

