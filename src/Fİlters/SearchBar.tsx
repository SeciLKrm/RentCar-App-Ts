import Select from 'react-select'
import SearchButton from './SearchButton';
import { makes } from '../constants';
import { useMemo, useState } from 'react';
import { IOption } from '../types';
import { useSearchParams } from 'react-router-dom';


const SearchBar = () => {
const [make,setMake]=useState("")
const [model,setModel]=useState("")
const [params,setParams] = useSearchParams()
console.log(params)
    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    //   ]



      // useMemo hook'u bir değeri hesaplamak ve bu değeri
     // bir sonraki render sırasında hesaplamadan önce
    // önbellekte saklamak için kullanılır
   // bu performans artttırmada yardımcı olur
  // maliyetli işlemler yapılıyorsa tercih edilir
 // gereksiz hesaplamaların önüne geçer.
      // string dizisini map ile option dizisine çevirdik --> [{label: , value : },{}] 
const newMakes = useMemo(()=>makes.map((item)=>({
  label : item,
  value : item
})),[makes]);

// console.log(newMakes)
// console.log("render oldu")

const handleSubmit = (e:React.FormEvent) =>{
e.preventDefault()
if(make && model === ""){
// marka var model yoksa
setParams({make : make.toLocaleLowerCase()})
}else if(make && model ){
  setParams({make : make.toLocaleLowerCase(), model : model.toLocaleLowerCase()})
}else {
  alert ('Lütfen Marka ve Model Seçiniz')
}

}


  return <form onSubmit={handleSubmit} className='searchbar gap-3'>
<div className='searchbar__item text-black'>
    {/* marka seçme selecti */}
<Select className='w-full' options={newMakes}
onChange={(e: IOption | null) => e && setMake(e.value)}
/>
<SearchButton styling='sm:hidden'/>

</div>
{/* model seçme inputu */}
<div className='searchbar__item'>
    <img width={25} className='absolute ml-4' src="/model-icon.png" alt="" />
    <input className='searchbar__input rounded text-black' 
    placeholder='Civic' 
    type="text"
    onChange={(e)=>setModel(e.target.value)} />
    <SearchButton styling='sm:hidden'/>
</div>

<SearchButton styling='max-sm:hidden'/>
  </form>;
};

export default SearchBar;
