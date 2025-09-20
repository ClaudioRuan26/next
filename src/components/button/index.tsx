'use client'

import { useState } from "react"

export function Button() {

    const [nome, setNome] = useState("Sujeito programdor")

    function handleChangeName () {
        setNome("Claudio")
    }
    
    return (
        <div>
            <button onClick={handleChangeName}>Alterar nome</button> <br />
            <h3>Nome: {nome}</h3>
        </div>
    )
}