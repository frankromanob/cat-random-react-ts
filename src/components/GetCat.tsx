import { useCats } from "../hooks/hooks";
import { ChangeEvent, useState } from 'react';

export const GetCat = () => {
    const [valueSay, setValueSay] = useState<string>('');
    const [valueTag, setValueTag] = useState<string>('');
    const cat = useCats()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValueSay(e.target.value)
        cat.setCatSay(e.target.value)
    }
    const handleChangeTag = (e: ChangeEvent<HTMLSelectElement>) => {
        setValueTag(e.target.value)
        cat.setCatTag(e.target.value)
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">A random cat from CATAAS</h1>
            <h5 className="text-xs text-blue-500 font-bold">@RomApps personal project</h5>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 m-2 px-4 rounded"
                onClick={cat.getCat}>
                Show me another cat
            </button>
            <div className=" w-46 border-sky-500 border-2 p-1 flex flex-col items-center justify-center">
                <div  >
                    <label htmlFor='catSayText' className="text-3md">Say something:</label>
                    <input id='catSayText' type="text" className="m-2 rounded border-sky-500 border-2 hover:border-green-700"
                        value={valueSay} onChange={handleChange} />
                </div>
                <div  >
                    <label htmlFor='catTag' className="text-3md">Tag:</label>
                    {/* <input id='catTag' type="text" className="rounded border-sky-500 border-2 hover:border-green-700"
                        value={valueTag} onChange={handleChangeTag} /> */}
                    <select id='catTag' className="rounded border-sky-500 m-2 border-2 hover:border-green-700"
                        value={valueTag} onChange={handleChangeTag}>
                        {cat.catTags.map((tag, index) => (
                            <option key={index} value={tag}>{tag}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="bg-purple-30 flex items-center justify-center ">
                <img className="object-cover h-150 w-150 m-5 border-2 border-sky-500 p-2 rounded"
                    src={cat.catImg} alt='Cat(s)'>
                </img>
            </div>
        </div>
    )
}