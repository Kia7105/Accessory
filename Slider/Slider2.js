const Slider2=async()=>{
    let slider2=[]
    try {
        let data=await fetch("http://localhost:3000/slid2").then(data=>data)
        let res=await data.json()
        slider2=res.map((item)=>{
            return `<div class="swiper-slide custom-slide"><img src=${item.src}></div>`
        })
    } catch (error) {
        console.log(error.message);
    }
    document.querySelector(".slid2").innerHTML=slider2.join(" ")

}
export default Slider2;

