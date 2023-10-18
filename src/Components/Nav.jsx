const Nav = ({search})=>{
   
    return (
        <>
            <div className="  flex justify-between mt-3">
                <h1 className="text-3xl sm:text-5xl font-bold mx-5 ">F<span className="text-red-600">o</span>ody Z<span className="text-red-600">o</span>ne</h1>
                <input type="search" placeholder="Search"  className=" mr-5 px-3 border-2 border-black rounded-xl" onChange={search}/>
            </div>
        </>
    )
}
export default Nav;