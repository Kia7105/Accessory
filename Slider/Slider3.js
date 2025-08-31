const Slider3=async()=>{
    let slider3=[]
    try {
        let data=await fetch("http://localhost:3000/slid3").then(data=>data)
        let res=await data.json()
        slider3=res.map((item)=>{
            return `<div class="product-slide bg-white rounded-xl shadow p-4 flex flex-col items-center text-center">
            <img src=${item.src} alt="" class="w-[20rem] h-[15rem] object-contain mb-3">
            <p class="relative top-[0px] text-xs text-gray-500">${item.catz}</p>
            <h3 class="relative top-[3rem] text-sm font-bold text-gray-800 mb-1">${item.titlez}</h3>
            <span class="relative top-[5rem] right-[3rem] text-[20px] text-sm font-bold text-blue-600">${item.price}</span>
          </div>`
        })
    } catch (error) {
        console.log(error.message);
    }
    document.querySelector(".slid3").innerHTML=slider3.join(" ")

}
export default Slider3;

