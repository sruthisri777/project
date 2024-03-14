import { useState } from "react";
export default function Task1() {
    const [opacity1, setOpacity1] = useState(0.0000001);
  let style1 = {
    opacity: opacity1,
    position: 'absolute',
    width:"90%",
    height:"90%",
    flex:1,
    zIndex: 2 // Lower z-index for iframe
  };

  let style2 = {
    position: 'absolute',
    left:'50%',
    top:"50%",
    right:"50%",
    bottom:"50%", 
    zIndex: 1 // Higher z-index for text
  };

  return (
    <>
    <form>
    <label>slider:
      <input type="range" value={opacity1} onChange={(e) => setOpacity1(e.target.value)} min="0" max="1" step="0.1"/>
    </label>
  </form>
    <div class="container">
    <div class="row center">
    
        <iframe src="https://m0wn1ka.github.io/" title="title" style={style1}></iframe>
          <p style={style2}> lottery</p>
        
    </div>
</div>
      </>
  );
}


