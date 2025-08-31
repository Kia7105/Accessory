const Slider=async()=>{
    let slider=[]
    try {
        let data=await fetch("http://localhost:3000/slids").then(data=>data)
        let res=await data.json()
        slider=res.map((item)=>{
            return `<div class="swiper-slide"><img src=${item.src} /></div>`
        })
    } catch (error) {
        console.log(error.message);
    }
    document.querySelector(".slids").innerHTML=slider.join(" ")

}
export default Slider;