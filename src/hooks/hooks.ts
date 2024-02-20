import { useEffect, useState } from "react";
import { fetchCat,fetchTags } from "../controllers/apiController";

// type resultProps = {
//     id: string,
//     url: string,
//     width: number,
//     height: number,
//     breeds: string
// };

export const useCats = () => {
    const [catImg, setCatImg] = useState<string>('');
    const [catSay, setCatSay] = useState<string>('');
    const [catTag, setCatTag] = useState<string>('');
    const [catTags, setCatTags] = useState<string[]>([]);
    //   const [result, setResult] = useState<resultProps[]>([]);
    useEffect(() => {
        const cat = async () => {
            setCatImg('/loading.gif')
            const data = await fetchCat(catSay,catTag)
            setCatImg(data)
        }
        cat()
        const tags = async () => {
            const data = await fetchTags()
            setCatTags(data)
        }
        tags()
    },[])

    const getCat = async () => {
        setCatImg('/loading.gif')
        const data = await fetchCat(catSay,catTag)
        setCatImg(data)
    }
    return ({
        catImg,
        getCat,
        catSay,
        setCatSay,
        catTag,
        setCatTag,
        catTags,
        setCatTags
    })
}