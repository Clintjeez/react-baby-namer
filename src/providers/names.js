import React, { createContext } from 'react';

import {names} from '../data/index';

// 1. Create a context
export const NamesContext = createContext()

// 2. Context provider
 function NamesProvider({children}) {
return <NamesContext.Provider value={names}>{children}</NamesContext.Provider>
}

export default NamesProvider;