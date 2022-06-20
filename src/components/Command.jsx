import React from "react";
import Button from "./Button";

const Command = ({ name, removeItem, qtd, addItem, complement, price }) => {
    return (
        <li>
            <p>{name}</p>
            <div>
                <Button children='-' clickFunction={removeItem} />
                <p>{qtd}</p>
                <Button children='+' clickFunction={addItem} />
            </div>
            <p>{complement}</p>
            <p>R${price},00</p>
        </li>
    )
}

export default Command;