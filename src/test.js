import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
function App() {
const data = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,\n 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36 ]

return (
<div>
    <StickyContainer>
        {({ style }) => (
            <header style={style}>\n This is a sticky header\n </header>\n
         )}
         </Sticky>
         
         <ul>
            {data.map((x) => {\n return (<li key={x}>{x}</li>)\n })}\n </ul>\n </StickyContainer>\n \n </div>\n );\n}\nexport default App;
