import React from 'react';

export default function ResetSearch({searchValue, setSearchValue}) {
    if (!searchValue) {
        return null 
    }
    return <button className="reset-search" onClick={() => setSearchValue('')}>Reset Search</button>
}