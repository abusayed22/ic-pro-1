import React, { useState } from "react";
import "./Home.css"

function Home() {
        const [list,setList] = useState([]);
        const [inputing,setInputing] = useState('');
        const [forEdit,setForEdit] = useState(null);
        const [editStatus,setEditStatus] = useState(false);

        const addHandler = (e) => {
                e.preventDefault();
                if(inputing) {
                        const item = {
                                id: Date.now(),
                                item:inputing,
                                status:false
                        }
                        setList([item,...list]);
                        setInputing('')
                } else {
                        alert('you are wrong')
                }
        }

        const editHandler = (id) => {
                const editing = list.find((list) => list.id === id);
                setForEdit(editing)
                setEditStatus(true)
                setInputing(forEdit.item)// Dabule click dile tarpor value input edit er jonno jacce 
        }


        const updateHandler = (e) => {
                e.preventDefault();
                const newListITem = list.map((list) => {
                        if(list.id === forEdit.id){
                                list.item = inputing
                        }
                        return list
                })
                setList(newListITem)
                setEditStatus(false)
                setForEdit(null)
                setInputing('')
        }

        const deleteHandler = (id) => {
                setList( list.filter( list => (list.id !== id) ));
        }

  return <div>
        <div className="main__list__area">
                <div className="input__box">
                        <form onSubmit={ (e) => editStatus ? updateHandler(e) : addHandler(e) }>
                                <input type="text" value={inputing} onChange={(e)=> setInputing(e.target.value)}   placeholder="Enter a any list" id="inputing" />

                                <button>{editStatus ? "Update list" : "Add list"}</button>
                        </form>
                </div>
               {list.map(s => (
                 <div key={s.id} className="list__area">
                        <div style={{display:'flex',margin:'0 auto'}}>
                                
                                        <div className="list__item">
                                        {s.item}
                                        </div>
                                        <button onClick={() => editHandler(s.id)} className="list_btn_e">Edit</button>
                                        <button onClick={() => deleteHandler(s.id)} className="list_btn_d">Delete</button> 
                        </div>

                </div>
               ))}
        </div>
  </div>;

        function newFunction() {
                return updateHandler();
        }
}

export default Home;


{/**/}