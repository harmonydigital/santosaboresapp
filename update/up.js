import db from './imports.js'

const updateForm=document.querySelector('form.update') 

 

btnSubmitformSalvar.addEventListener('click',(e)=>{
    e.preventDefault()

    db.collection('cardapio').doc('cardapioatual').set({dataProd:data})
 
})



document.getElementById('btnDelete').addEventListener('click',(e)=>{
    e.preventDefault()
 console.log('delete')
})


 