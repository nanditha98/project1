import React,{useState} from "react";

function News(){

    let [value,setValue]=useState("nandu");

    async function Search ()
    {
 let response= await fetch("https://newsapi.org/v2/everything?q=iphone&apikey=O46d2e14e65b4d88acbaaa64c3531399b");
        let result=await response.json();
        console.log(result);
        console.log(result.articles);  
        let p = result.articles.map((a)=>{return( <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={a.urlToImage} alt="Mountain" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{a.title}</div>
          <p className="text-gray-700 text-base">
  {a.description}
          </p>
          <button className="font-bold text-xl" href={a.url}> Read More</button>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>
    )})     
        console.log(p); 
        setValue(p);
    }
    Search();
    return <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gaps-5">helooo {value}</div>
}
export default News;