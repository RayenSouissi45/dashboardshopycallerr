function GlobalViewCommercialCart({CategoryProductItem}) {
  console.log(CategoryProductItem);
  
    return (
        <div className="flex flex-col flex justify-center items-center  w-[125px] h-[120px] ">
                <div className="flex-row w-[60px] h-[60px] rounded-3xl ">
                  <img src={CategoryProductItem.picture} className="rounded-full" alt="pic"/>
                </div>
                <p className="pl-12 pt-2 ml-[-45px] font-medium	text-xs">{CategoryProductItem.name}</p>
              </div>
    )
}
export default GlobalViewCommercialCart ;