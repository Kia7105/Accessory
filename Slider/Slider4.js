const Slider4=async()=>{
    let slider4=[]
    try {
        let data=await fetch("http://localhost:3000/slid4").then(data=>data)
        let res=await data.json()
        slider4=res.map((item)=>{
            return `<div class="products-slide bg-white rounded-xl shadow p-4 flex flex-col items-center text-center">
            <img src=${item.src} alt="" class="w-[20rem] h-[15rem] object-contain mb-3">
            <p class="relative top-[0px] text-xs text-gray-500">${item.catz2}</p>
            <h3 class="relative top-[3rem] text-sm font-bold text-gray-800 mb-1">${item.title2}</h3>
            <span class="relative top-[5rem] right-[3rem] text-[20px] text-sm font-bold text-blue-600">${item.price2}</span>
          </div>`
        })
    } catch (error) {
        console.log(error.message);
    }
    document.querySelector(".slid4").innerHTML=slider4.join(" ")

}
export default Slider4;

