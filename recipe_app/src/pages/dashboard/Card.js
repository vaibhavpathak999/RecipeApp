import React, { useState, useEffect } from 'react';

function Card({ ingred, index, deleteIngredient, setRecipeIngredients, propName }) {
    const [ingredient, setIngredient] = useState("");
    const [useValue, setValue] = useState(false);

    useEffect(() => { 
        console.log(useValue);
        if(!useValue)
        return
            setRecipeIngredients( pre => [...pre , ingredient] );
        setValue(false);
        console.log(ingredient);
    },[ingredient,useValue])

    return (
        <div style={{ display: "flex" }} key={`${ingred}-${index}`}>
            <div>
                <input type="text" placeholder={propName}
                    onChange={(e) =>
                        setIngredient(e.target.value)}
                    value={ingredient} 

                    onKeyPress = {
                        (e) => (e.charCode === 13) && setValue(true)
                    }
                 />
            </div>
            <div>
            <button className="btn btn-warning waves-effect waves-light #66bb6a green lighten-1" style={{ margin: "0px 0px 0px 10px" }} onClick={() => setValue(true)} > + </button> 

             <button className="btn btn-warning waves-effect waves-light #ef5350 red lighten-1" style={{ margin: "0px 0px 0px 10px" }} onClick={() => deleteIngredient(index)} > X </button> 
            </div>
        </div>
    )
}

export default Card
