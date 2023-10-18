import { useEffect, useState } from 'react';
import Hero from './Components/Hero';
import Menu from './Components/Menu';
import Nav from './Components/Nav';
import foodData from './api';

const App = () => {
    const [searchVal, setSearchVal] = useState('');
    const [filterData, setFilterData] = useState(foodData);
    const[selectedCategory, setSelectedCategory] = useState('ALL');

    useEffect(()=>{
        const filterData = foodData.filter((food)=>{
            return food.name.toLowerCase().includes(searchVal.toLowerCase());
        })
        setFilterData(filterData);
    },[searchVal])
    
    const onSelectCategory=(cat)=>{
        // console.log(cat);
        setSelectedCategory(cat);
        if(cat==='All')
        {
            setFilterData(foodData);
        }
        else{
            const filter = foodData.filter((item)=>item.type.toLowerCase()===cat.toLowerCase());
            setFilterData(filter);
        }
    }


    const search =(e) => {
        setSearchVal(e.target.value);
    };

    
    return (
        <>
            <Nav search={search} />
            <Menu onSelectCategory ={onSelectCategory} />
            <Hero filterData={filterData} />
        </>
    );
};

export default App;
