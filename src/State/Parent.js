import React from 'react'
import Child from './Child.js'
import {useState} from 'react'
const Parent=()=>{
   let  product=[{ id: 1, img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/7/n/p/s-met66-metafab-original-imagsruzwbthpvwx.jpeg?q=70", name: "Kurti", price: 678, color: "blue",item:"true" },
    { id: 2, img: "https://rukminim2.flixcart.com/image/612/612/l4ln8nk0/sari/p/2/u/free-2535s934-samah-unstitched-original-imagfgq7pc2mc4vz.jpeg?q=70", name: "Saree", price: 794, color: "pink",item:"true"  },
    { id: 3, img: "https://rukminim2.flixcart.com/image/612/612/krntoy80/lehenga-choli/z/n/8/free-3-4-sleeve-future-wine-goroly-original-imag5ezdwczgyb5m.jpeg?q=70", name: "Lehenga", price: 500, color: "black",item:"true"  },
    { id: 4, img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dress/8/r/0/8-9-years-0044-ak-kashmir-garments-original-imaghy3drwuj8emd.jpeg?q=70", name: "Frok", price: 890, color: "white" ,item:"true" },
    { id: 5, img: "https://rukminim2.flixcart.com/image/612/612/xif0q/top/s/f/s/s-sgf1026-top-shree-ganesh-fashion-original-imagmcj8szt3h2af.jpeg?q=70", name: "Top", price: 400, color: "red" ,item:"true" },
    { id: 6, img:"https://rukminim2.flixcart.com/image/612/612/xif0q/legging/6/d/v/free-kclg-fs-af-pl-1001-31-fly-original-imaggn6fnwqqvuy4.jpeg?q=70", name: "Leggings", price: 320, color: "orange",item:"true"  },
    { id: 7, img: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/q/r/y/l-r37-label-d11-original-imagu33qmnxncf9x.jpeg?q=70", name: "Palazzo", price: 259, color: "green",item:"true"  },
    { id: 8, img: "https://rukminim2.flixcart.com/image/612/612/xif0q/fabric/7/f/q/yes-3-m-unstitched-2-m-2-5-m-dmopem370740-soch-original-imagsz7zhzf9zphg.jpeg?q=70", name: "Chudithar", price: 467, color: "yellow" ,item:"true" }];
    const[arr,setArr]=useState(product);
    let delbtn=(id)=>{
        console.log(id);
        let s=arr.map((val,i)=>{
            return val.id===id ? val.item==="false":val
        })
        console.log(s);
        setArr(s)

    }
    return(
        <div>
            <Child pro={arr} d={delbtn} />


        </div>
    )
}
export default Parent;