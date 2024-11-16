import {defineStore} from 'pinia'
import {ref,onMounted} from 'vue'

import {
    getFirestore,
    getDocs,
    collection,
    addDoc,
    deleteDoc,
    doc,
    query
} from 'firebase/firestore';

import firebaseApp from '../firebaseConfig.js'

const db = getFirestore(firebaseApp);

export const useColaboradoresStore = defineStore('colaboradores',()=>{

    const colaboradores = ref([]);

    const fetchColaboradores = async ()=>{
        try{
            const querySnapshot = await getDocs(collection(db, 'usuarios'));

            colaboradores.value=querySnapshot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data(),
            }));
        }catch(e){
            console.log(e)
        }
        
    }

    const addColaborador = async (colaborador)=>{
        try{
          const colaboradorRef =  await addDoc(collection(db,'usuarios'),colaborador);
          colaboradores.value.push({id:colaboradorRef.id,...colaborador});  
          
        }catch(e){
            console.log(e)
        }
    }

    const deleteColaborador= async (id)=>{
        try{
            await deleteDoc(doc(db,'usuarios',id));
            colaboradores.value = colaboradores.value.filter((colaborador)=>colaborador.id !== id);
        }catch(e){
            console.log(e)
        }
    }

    onMounted(fetchColaboradores);

    return {
        colaboradores,
        fetchColaboradores,
        addColaborador,
        deleteColaborador
    }

})  