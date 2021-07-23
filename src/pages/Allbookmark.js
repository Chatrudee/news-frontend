import React, { useState } from "react";
import "../App.css";
import { news } from "../data/testData";
import { fruits } from "../data/testData";

export default function AllBookmark() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div>
            <input type="text" onChange={ (event) => {setSearchTerm(event.target.value)}}/>
            {news.filter((val) => {
                if (searchTerm == ""){
                    return val
                } else if (val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return val
                }
            }).map((val, key) => {
                return(
                    <div className='user' key={key}>
                        <p>{val.title}</p>
                    </div>
                )
            })
            }
        </div>
  );
}


   