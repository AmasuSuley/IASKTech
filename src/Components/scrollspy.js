import React from 'react';
import ScrollSpy from "react-ui-scrollspy";

const scrollspy=()=>{
    return(
        <>
        <div className='container-fluid'>
        <ScrollSpy>
  <div id="first">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
    veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
    voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
    Tempore, vero!
  </div>
  <div id="second">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
    veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
    voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
    Tempore, vero!
  </div>
</ScrollSpy>
</div>
        </>
    )
}
export default scrollspy;