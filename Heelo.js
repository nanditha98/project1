import React,{useState,useEffect} from "react";
import Sea from "./Sea";

const Helo = () => {
    const [articles,setArticles]=useState([])
    const [term,setTerm]=useState('everything')
    const[isLoading,setIsLoading]=useState(true)

    useEffect(()=>{
        const fetchArticles = async () => {
        try{
                const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.React_APP_ARTICLES_API_KEY}`)
                const articles=await res.json()
                console.log(articles.response.docs);
                setArticles(articles.response.docs)
                setIsLoading(false)
            }catch(err){
              console.log(err);
        }
        }
    fetchArticles();
    },[term])
return(
    <>
    <div className="showcase">
        <div className="overlay">
            <h1>viewing articles about.....{term}</h1>
           <Sea searchText={(text) => setTerm(text)}/> 
        </div>
    </div>
   {isLoading  ? (
    <h1>Loading....</h1>  
):(
  <section>
        {articles.map((article)=>{
          
          const {
            abstract,
            headline:{main},
            byline:{original},
            lead_paragraph,
            news_desk,
            section_name,
            web_url,
            _id,
            word_count,
          }=article
          return(
            <article key={_id}>
                <h2>{main}</h2>
                <h4>{abstract}</h4>
                <a href={web_url} target="_blank">web Resource</a>
                <p>{lead_paragraph}</p>
                <ul>
                    <li>{original}</li>
                    <li>{news_desk}</li>
                    <li>{section_name}</li>
                    <li>{word_count}</li>
                </ul>
            </article>
          )

            
        })
        }
    </section>
    )}
    </>
)

}
export default Helo;