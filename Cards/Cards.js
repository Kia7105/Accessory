const Cards = async () => {
  let normalCards = [];
  let lastThreeCards = [];

  try {
    let data = await fetch("http://localhost:3000/cards");
    let res = await data.json();

    res.forEach((item, index) => {
      const isLastThree = index >= res.length - 3;

      if (isLastThree) {
        lastThreeCards.push(`
          <div class="w-[390px] flex border border-gray-300 rounded-lg bg-white mb-4 p-4 shadow-sm hover:shadow-xl h-[170px]">
            <div class="flex-shrink-0 w-[100px] h-[100px] flex items-center justify-center">
              <img class="object-contain max-h-[100px]" src="${item.src}" alt="product" />
            </div>
            <div class="flex flex-col justify-between flex-grow ml-4">
              <h5 class="text-[14px] text-gray-900 font-medium leading-6">${item.title}</h5>
              <div>
                <span class="line-through text-gray-400 text-sm">${item.price}</span>
                <span class="text-red-500 text-sm ml-2">${item.dprice} تخفیف</span>
              </div>
              <div class="flex items-center">
                <span class="text-blue-700 font-bold text-lg">${item.rprice}</span>
                <span class="text-blue-700 text-sm mr-1">${item.toman}</span>
              </div>
            </div>
          </div>
        `);
      } else {
        // --- قالب قدیمی (بقیه کارت‌ها) ---
        normalCards.push(`
          <div class="w-[360px] hover:shadow-2xl bg-white border border-gray-200 rounded-lg shadow-sm">
            <a href="#">
              <img class="rounded-t-lg" src=${item.src} alt=""/>
            </a>
            <div class="p-9">
              <a href="#">
                <h5 class="mb-20 text-[16px] tracking-tight text-gray-900">${item.title}</h5>
              </a>
              <span class="mb-3 font-bold text-gray-700 dark:text-gray-400 line-through">${item.price}</span>
              <span class="text-orange-600 relative right-[7rem] font-normal text-sm">${item.dprice}</span>
            </div>
            <div class="flex items-center justify-end leading-[30px]">
              <span class="text-blue-700 font-bold text-xl relative left-[1.5rem] bottom-[10px]">${item.rprice}</span>
              <span class="text-blue-700 relative left-[16px] bottom-[8px]">${item.toman}</span>
            </div>
          </div>
        `);
      }
    });
  } catch (error) {
    console.log(error.message);
  }

  document.querySelector(".cards").innerHTML = `
    <div class="flex flex-wrap gap-4">
      ${normalCards.join(" ")}
    </div>
    <div class="flex flex-col gap-4 mt-6">
      ${lastThreeCards.join(" ")}
    </div>
  `;
};

export default Cards;