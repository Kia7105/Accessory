const Slider5=async()=>{
    let slider5=[]
    try {
        let data=await fetch("http://localhost:3000/slid5").then(data=>data)
        let res=await data.json()
        slider5=res.map((item)=>{
            return `<div class="swiper-slide flex items-center justify-center bg-white rounded-2xl shadow-md p-4 
            hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
  <img src=${item.src} 
       alt="Camelion" class="max-h-[70px] object-contain mx-auto">
</div>`
        })
    } catch (error) {
        console.log(error.message);
    }
    document.querySelector(".slid5").innerHTML=slider5.join(" ")

}
export default Slider5;

