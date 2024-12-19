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
console.log(activeButton)
activeButton.classList.remove('rounded-lg');
activeButton.classList.add('bg-emerald-100','rounded-full','border-teal-800','border-2');

}