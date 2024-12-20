const loadSpiner= (show)=>{
    const loadSpinerContainer = document.getElementById('load-spiner');
    if(show){
        loadSpinerContainer.classList.remove('hidden')
        document.getElementById('pets-animal-by-category').innerHTML = '';
    }
    else{
        loadSpinerContainer.classList.add('hidden');
    }
}
const removeClasses = ()=>{
    const allButtons = document.querySelectorAll('.category-btn');
    for(const btn of allButtons){
        btn.classList.remove('bg-emerald-100','rounded-full','border-teal-800','border-2');
        btn.classList.add('rounded-lg');
    }
}
const addActiveClasses= (categoryB)=>{
const activeButton = document.getElementById(` btn-${categoryB}`)

activeButton.classList.remove('rounded-lg');
activeButton.classList.add('bg-emerald-100','rounded-full','border-teal-800','border-2');

}
let storedPetdata = [];

const adoptModal = (event)=>{
    let count = 3 ;
    const countContainer = document.getElementById('coundown-container');
    countContainer.innerText = count;
    my_modal_5.showModal()
    const interval = setInterval(()=>{
        count--;
       if(count !==0) countContainer.innerText = count;
        if(count<1){
            clearInterval(interval);
            my_modal_5.close()
            event.textContent = 'Adopted';
            event.disabled = true;

        }

    },1000)
}
const petsByDetails =async (id)=>{
   
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    const data = await res.json()
    displayDetails(data.petData)
   
}
const displayDetails = data=>{
    const modalBody = document.getElementById('modals-container')
   
    modalBody.innerHTML= `
    <img src= "${data.image}"alt=""
    <h3>${data.category}</h2>
    <p>${data.pet_details} </p>
    `
  
    my_modal_4.showModal()
}