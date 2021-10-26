import React, { useState, useEffect } from 'react';
import "../css/dashboard.css";


function Card({ ingred, index, setRecipeIngredients, propName }) {
    const [ingredient, setIngredient] = useState("");
    const [useValue, setValue] = useState(false);
    const [disable, setDisable] = useState(false);

    useEffect(() => { 
        console.log(useValue);
        if(!useValue)
        return
            setRecipeIngredients( pre => [...pre , ingredient] );
        setValue(false);
        console.log(ingredient);
    },[ingredient,useValue])

    function handleClick() {
        setValue(true);
        setDisable(true);
    }

    return (
        <div style={{display:"flex"}} key={`${ingred}-${index}`}>
            <div>
                <input type="text" placeholder={propName}
                    onChange={(e) =>
                        setIngredient(e.target.value)}
                    value={ingredient} 

                    // onKeyPress = {
                    //     (e) => (e.charCode === 13) && setValue(true) && setDisable(true)
                    // }
                 />
            </div>
            <div> 
                <button className="btn btn-primary waves-effect waves-light" style={{ margin: "10px 0px 10px 15px" }} disabled={disable} onClick={() => handleClick() } > Add  </button> 
            </div>
        </div>
    )
}

export default Card
