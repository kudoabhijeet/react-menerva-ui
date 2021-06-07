import React from 'react';
import Upper from './components/Upper'
import BottomSection from './components/Bottom'
import {Divider} from '@chakra-ui/react'
import Middle from './components/Middle';
function App() {
  return (
    <div>
    <Upper/>  
    <Middle/>
    <BottomSection/>
    </div>
  );
}
export default App;
