import React, {useContext} from 'react';

import NameList from './name-list';
import NamesContext from '../providers/names';

 function NamePicker({ searchValue, shortList, setShortList }){
     const names = useContext(NamesContext);
    const filterdNames = names.filter(entry => entry.name.toLowerCase().includes(searchValue.toLowerCase())).filter(entry => !shortList.includes(entry.id))
    function addToShortList(id){
        setShortList([...shortList, id])
    }
    return (
       <NameList nameList={filterdNames} onItemClick={addToShortList} />
    )
}

export default NamePicker;