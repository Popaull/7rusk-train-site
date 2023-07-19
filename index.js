const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const i2 = document.getElementById("i1")
const i1 = document.getElementById("i2")
const list_img = [img1,img2,img3]
const cross = document.getElementById("cross")
const box = document.getElementById('box')

img2.addEventListener("click", ()=>{
    window.open('https://www.youtube.com/watch?v=DJoCZmoB-aw','_blank')
})



function myFunction(x) {
    if (x.matches) { // If media query matches
        function menu (arg){
            arg.forEach(e => {
                e.addEventListener("mouseover",()=>{
                    list_img.forEach(e =>{
                         e.style.width="20vw"
                        e.children[1].style.opacity="0"
                        e.style.opacity="0.5"
                    })
                    e.style.width="40vw"
                    e.children[1].style.opacity="1"
                    e.style.opacity="1"
                })
            });
            }
            img1.addEventListener("click",()=>{
    
                i1.style.top="20vh"
                i2.style.top="100vh"
                box.style.display ="flex"
                
            })
            img3.addEventListener("click",()=>{
                
                i2.style.top="20vh"
                i1.style.top="100vh"
                box.style.display ="flex"
            })

            cross.addEventListener("click", ()=>{
                box.style.display="none"
            })
            menu(list_img);
    } else {
        function menu (arg){
            arg.forEach(e => {
                e.addEventListener("mouseover",()=>{
                    list_img.forEach(e =>{
                         e.style.width="10vw"
                        e.children[1].style.opacity="0"
                        e.style.opacity="0.5"
                    })
                    e.style.width="20vw"
                    e.children[1].style.opacity="1"
                    e.style.opacity="1"
                })
            });
            
            }
            
            menu(list_img);
            
img1.addEventListener("click",()=>{
    
    i1.style.top="0px"
    i2.style.top="500px"
    
})
img3.addEventListener("click",()=>{
    
    i2.style.top="0px"
    i1.style.top="500px"
   
})

    }
  }



var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
