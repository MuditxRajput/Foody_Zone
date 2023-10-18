const Hero = ({filterData}) => {
    console.log(filterData);
    
    // {data.filter((val)=>{
    //     return (
    //         setData(val.name.toLowerCase().includes(searchVal.toLowerCase()))
    //     )
    // })}
    return (
        <>
        <div className=" h-screen mx-2 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {filterData.map((val)=>{
                return(
                    <div className='flex  flex-row h-52 mt-10 bg-white shadow-lg shadow-slate-800 rounded-xl hover:shadow-red-500 ' >
                    <img src={val.image} alt="image" className=" mt-16 w-20 h-20 sm:mt-10 md:mt-10 lg:mt-4 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-40 lg:h-40" />

                    <div className='mx-4 flex flex-col justify-center items-center  sm:mx-1 rounded-xl'>
                    <p className='  font-bold sm:text-sm mt-1 md:mt-1  lg:text-xl  '>{val.name}</p>
                    <p className='   px-2 sm:text-sm lg:mt-4  '>{val.text}</p>
                    <div className='   w-full flex justify-center items-center  h-20 '>
                    <button  className='bg-red-500 h-9 w-14 rounded-xl text-white font-white ' >{val.price}</button>
                    
                    </div>
                    </div>
                    
                    </div>
                )
                
                
            })}
           
        </div>
        </>
    );
}

export default Hero;
