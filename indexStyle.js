let theCard=document.querySelector('#theCard')
let formBox1=document.querySelector('#formBox1')
let formBox2=document.querySelector('#formBox2')
let formBox3=document.querySelector('#formBox3')
let logoBox=document.querySelector('#logoBox')

//The hover function on the card
const logoBoxRightNull = () =>{
    logoBox.style.right='0px'
}
formBox1.addEventListener('mouseover',logoBoxRightNull)
formBox2.addEventListener('mouseover', logoBoxRightNull)
formBox3.addEventListener('mouseover', logoBoxRightNull)
logoBox.addEventListener('mouseover',logoBoxRightNull)
theCard.addEventListener('mouseout', (e)=>{
    logoBox.style.right='340px'
})


//Clicking Buttons on Form1

let createTeamBtn = formBox1.querySelector('#createTeamBtn')
createTeamBtn.addEventListener('click', (e)=>{
    formBox2.style.zIndex='10';
    formBox3.style.zIndex='1';
    formBox1.style.zIndex='1';
})

let joinTeamBtn = formBox1.querySelector('#joinTeamBtn')
joinTeamBtn.addEventListener('click', (e)=>{
    formBox2.style.zIndex='1';
    formBox3.style.zIndex='10';
    formBox1.style.zIndex='1';
})

let backBtn2 = formBox2.getElementsByClassName('backButton')[0]
backBtn2.addEventListener('click', (e)=>{
    formBox2.style.zIndex='1';
    formBox3.style.zIndex='1';
    formBox1.style.zIndex='10';
})

let backBtn3 = formBox3.getElementsByClassName('backButton')[0]
backBtn3.addEventListener('click', (e)=>{
    formBox2.style.zIndex='1';
    formBox3.style.zIndex='1';
    formBox1.style.zIndex='10';
})
