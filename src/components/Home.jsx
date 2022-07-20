import React, { useState } from "react";
import "./Home.css"

function Home() {
        const [state,setState] = useState(null);


  return <div>
        <div className="main__list__area">
                <div className="input__box">
                        <form action="">
                                <input type="text" value={setState} placeholder="Enter a any list" id="inputing" />

                                <button>Add List</button>
                        </form>
                </div>
                <div style={{marginTop:'20px'}}></div>
                <div className="list__area">
                        <div style={{display:'flex',margin:'0 auto'}}>
                                <div className="list__item">
                                list-1
                                </div>
                                <button className="list_btn_e">Edit</button>
                                <button className="list_btn_d">Delete</button>
                        </div>
                       
                        
                </div>
        </div>
  </div>;
}

export default Home;
