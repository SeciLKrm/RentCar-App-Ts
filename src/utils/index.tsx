import { colors } from "../constants";
import { ICarProps } from "../types";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8bcbaf7a2emsh51f471da367c07ap1ee547jsnd3b41e7c2083',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

interface fetchParams  {
make? : string;
model?:string;
year?: string;
limit?:string;
fuel? : string  
}

  export async function fetchCars(filters: fetchParams) {
     // url'den alınan parametrelere erişme
  // marka ve limit yoksa default değerler belirledik
 
  const{
    make = "bmw",
    model = "",
    limit = "5",
    year = "",
    fuel = ""
  } =filters

    const res = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?limit=${limit}&make=${make}&model=${model}&year=${year}&fuel_type=${fuel}`,
    options)
    const data = res.json()
    return data
  }

  // resim oluşturma 
  export const generateImage =(car:ICarProps, angle?:string):string=>{
   const url = new URL("https://cdn.imagin.studio/getimage")
  // console.log(url)
  
  // url'e gerekli arama parametreleri ekleme
  url.searchParams.append("customer", "hrjavascript-mastery")
  url.searchParams.append("make", car.make)
   // birden fazla kelimeyse ilk kelimeyi al
    // ilk kelimede / varsa /'tan öncesini al
  url.searchParams.append("modelFamily", car.model.split(' ')[0].split('/')[0])
  url.searchParams.append("zoomType", "fullscreen")
  if(angle){
  url.searchParams.append("angle", angle)
}
  // diziden rastgele  renk id 'si seçme
 const i = Math.round(Math.random()* colors.length)
 url.searchParams.append("paintId", colors[i])

 
// arabanın fotoğrafının url'ini döndür
console.log(url.href)

return url.href
 }
  // generateImage({make : "bmw" , model : "m3"})
  
