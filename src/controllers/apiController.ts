import { API_CAT, API_JSON, API_SAY, URI_BASE, API_TAGS } from '../constants/constants';

export const fetchCat = async (catText:string, catTags:string):Promise<string> => {
    let uriFetch=URI_BASE
    if (catTags.length) {catTags='/'+catTags};
    if (catText.length) {
        uriFetch+=API_CAT+catTags+API_SAY+catText+API_JSON
    } else{
        uriFetch+=API_CAT+catTags+API_JSON};
    //console.log('Uri: ',uriFetch);
    const data = await fetch(uriFetch, {
      method: "GET"
    });
    const jsonData = await data.json();
    //console.log('jdata:',jsonData);
    return(URI_BASE+API_CAT+'/'+jsonData._id);
  }

  export const fetchTags = async ():Promise<string[]> => {
    let uriFetch=API_TAGS
    //console.log('Uri: ',uriFetch);
    const data = await fetch(uriFetch, {
      method: "GET"
    });
    const jsonData = await data.json();
    //console.log('Tags:',jsonData);
    return(jsonData);
  }