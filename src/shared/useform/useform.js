import { useState } from 'react';

const useForm = (callback, initialState={}, resetOnSubmit=true) => {

    // Esitellään useState-hook, johon käyttäjän lomakkeelle
    // syöttämä tieto tallennetaan.
    const [values, setValues] = useState(initialState)

    // Submit-käsittelijä, joka estää oletustoiminnan ja 
    // kutsuu määriteltyä callback-funktiota.
    const handleSubmit = (event) => {
        if(event) {
            event.preventDefault();
        }
        callback();
        if (resetOnSubmit) resetValues();
    }

    // Syötekäsittelijä, joka tallentaa kentän tiedot 
    // se nimellä state-muuttujaan.
    const handleChange = (event) => {
        event.persist();
        // Tallennetaan kenttään syötetty arvo välimuuttujaan.
        let value = event.target.value;
        //Tallennetaan uusi arvi state-muuttujaan.
        setValues(values => ({...values, [event.target.name]:}));

    }

    // Funktio, joka palauttaa lomakkeen tiedot alkutilanteeseen.
    const reserValues = () {
        setValues(initialState);
    }

    // Palauta luonnin yhteydessä sekä käsittelijät että
    // state-muttuja.
    return {
        handleSubmit,
        handleChange,
        resetValues,
        setValues,
        values
    };

}

export default useForm;