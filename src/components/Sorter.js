import { useState } from "react";

export const Sorter =(items,sortBy)=>{
    // const [sortedItems, setSortedItems] = useState([]);

    switch(sortBy){
        case "nameAsc":
            // console.log(items);
            items.sort((a,b)=>{
                if(a.title<=b.title){
                    return -1
                }
                if(a.title>b.title){
                    return 1
                }
                return 0
            })
            break;
        case "nameDesc":
            alert("Name D");
            break;
        case "priceAsc":
            alert("PA ASC");
            break;
        case "priceDesc":
            alert("PD ASC");
            break;
        default:
            break;
    }
}