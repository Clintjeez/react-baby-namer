import React, { Fragment, useState } from 'react';

import NamePicker from './components/name-picker';
import Search from './components/search';
import ShortList from './components/short-list';
import ResetSearch from './components/reset-search';

function App({names}) {
  const [searchValue, setSearchValue] = useState('');
  const [shortList, setShortList] = useState([]);

  return (
  <React.Fragment> 
    <Search searchValue={searchValue} setSearchValue={setSearchValue} />
    <NamesContainer searchValue={searchValue} shortList={shortList} setShortList={setShortList} />
    
  </React.Fragment> 
  );
}

function NamesContainer( searchValue, setSearchValue, shortList, setShortList) {
  return (
    <main>
      <ShortList  shortList={shortList} setShortList={setShortList} />
      <NamePicker searchValue={searchValue} shortList={shortList} setShortList={setShortList}/>
      <ResetSearch searchValue={searchValue} setSearchValue={setSearchValue} />
    </main>
  )
}

export default App;
