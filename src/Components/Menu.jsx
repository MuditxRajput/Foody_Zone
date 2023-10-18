const Menu = ({onSelectCategory})=>{
    const categories = ['All','Breakfast','Lunch','Dinner']
    return(
        <>
        <div className="flex mt-8 justify-center gap-8 font-serif  sm:gap-14 ">
            {/* <button className="bg-red-500 px-5 py-1 text-white focus:bg-red-600 rounded-full shadow-sm hover:shadow-red-500  " onClick={()=>searchCat("All")}> All</button>
            <button className="bg-red-500 px-5 text-white focus:bg-red-600 rounded-full  shadow-sm hover:shadow-red-500  " onClick={searchCat}  > Breakfast</button>
            <button className="bg-red-500 px-5 text-white focus:bg-red-600 rounded-full  shadow-sm hover:shadow-red-500" onClick={searchCat}> Lunch</button>
            <button className="bg-red-500 px-5 text-white focus:bg-red-600 rounded-full shadow-sm hover:shadow-red-500 " onClick={searchCat}>Dinner</button> */}
            {categories.map((cat)=>{
                return(
                    <button className="bg-red-500 px-5 text-white focus:bg-red-600 rounded-full  shadow-sm hover:shadow-red-500 h-8 "
                    onClick={()=>onSelectCategory(cat)}
                    >{cat}</button>
                )
            })}
        </div>
        </>
    )
}
export default Menu;