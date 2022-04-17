import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch Man']);

    // const handleAdd = ()=>{

    //     setCategories(cats => [...cats, 'HunterXHuenter']);
    //     // setCategories([...categories, 'HunterXHuenter']);
    // }
        
  return (
    <div>
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories = {setCategories}/>
        <hr/>
    
        <ol>
               {
               categories.map(category=>{
                   return (

                        <GifGrid 
                        
                        key = {category}
                        category = {category} 
                        />
                   );
               })
               }
           </ol>

        </>
       
        
    </div>
  )
}

export default GifExpertApp;

