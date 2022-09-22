import React, { useState, useEffect } from "react";
import ItemsDetail from "../Detail/ItemsDetail";
import { useParams } from "react-router-dom";
import { Spinners } from "../Spinners/Spinners";
import { async } from "@firebase/util";
import { getDoc, doc } from "firebase/firestore";
import {db} from "../../Firebase/Firebase"

export const ItemsDetailContainer = () => {
  const { id } = useParams();

  const [datos, setDatos] = useState();
  const [cargando, setCargando] = useState(false)

  const getSelection = async (iditems) => {
    try{
      const document = doc(db, "items", iditems)
      const response = await getDoc(document)
      const resultado = {id: response.id, ...response.data()}
      setDatos(resultado)
      setCargando(true)

    }catch(error){
      console.error(error)
    }
  }

  useEffect(() =>{
    getSelection(id)
  },[id])

  return cargando ? (
    <div>
      <ItemsDetail dato={datos} />
    </div>
  ) : (
    <Spinners/>
  );
};
