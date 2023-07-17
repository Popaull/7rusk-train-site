const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")

const list_img = [img1,img2,img3]


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
    }
  }



var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
