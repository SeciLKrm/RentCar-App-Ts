import { IOption } from "../types";
import Select from 'react-select';
import {useState, useEffect }from "react"
import { useSearchParams } from "react-router-dom";

interface IFilterProps {
  title : string;
  options : IOption[]
}


const CustomFilter = ({title, options}:IFilterProps) => {
const[selected,setSelected]=useState<IOption>(options[0])
const[params,setParams]=useSearchParams()

useEffect(()=>{
  // urlye ekleyeceğimiz anahatar'ı belirleme
const key = title === 'Yakıt Tipi' ? 'fuel' : 'year'
if(selected.value){
params.set(key, selected.value.toLocaleLowerCase())
}else{
  params.delete(key)
}
 // url'i güncelleme
setParams(params)
},[selected])

  return (
  <div>
    <Select className="text-black min-w-[100px]"
    placeholder={title} options={options}
    onChange={(e:IOption | null)=>e && setSelected(e)} /> 
  </div>);
};

export default CustomFilter;
