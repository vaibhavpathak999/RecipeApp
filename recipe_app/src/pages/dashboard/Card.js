import React, { useState, useEffect } from 'react';

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
        <div style={{ display: "flex", flexDirection:"row", margin:"10px !important" }} key={`${ingred}-${index}`}>
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
            <button className="btn btn-warning waves-effect waves-light #66bb6a green lighten-1" style={{ margin: "0px 0px 20px 30px" }} disabled={disable} onClick={() => handleClick() } > Add  </button> 
            </div>
        </div>
    )
}

export default Card
