export default function Menu(){
    let menu=[]
    async function fetchMenu(){
        try{
        let data=await fetch("http://localhost:3000/menu").then(data=>data)
        let res=await data.json()
        menu=res.map((item)=>{
            if(item.dropdown.length > 0){
                return `<li class="relative group"><a href=${item.link} class="hover:text-orange-600 hover:border-b-[3px] pb-4 hover:border-amber-600">${item.name} <span>&#9662;</span></a>
                <ul class="absolute top-full right-0 mt-[18px] w-48 bg-white border border-gray-200 shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
                  ${
                    item.dropdown.map((elem)=>{
                      return `<a href=${elem.link}>${elem.name}</a>`
                    })
                  }
                  </li>
                </ul>
              </li>`
            }else {
              return `<li><a href=${item.link} class="text-orange-600 border-b-[3px] pb-4 border-amber-600">${item.name}</a></li>`
            }
        })
        document.querySelector(".header").innerHTML=menu.join(" ")
        } catch (error){
            console.log(error.message);
        }
    }
    fetchMenu()
}