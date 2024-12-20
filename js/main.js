const allPetsCategoryBtn = async()=>{
    const res  = await fetch('https://openapi.programming-hero.com/api/peddy/categories')
    const data = await res.json()
    displayAllPetsCategoryBtn(data.categories)
}
allPetsCategoryBtn();

const displayAllPetsCategoryBtn=(categoriesBtn)=>{
    const btnContainer = document.getElementById('button-container')
    categoriesBtn.forEach(element => {
        const divbtn = document.createElement('div')
        divbtn.innerHTML= `
        <button id=" btn-${element.category}" onclick="petsByCategory('${element.category}')" class= 'btn category-btn flex gap-2 py-2 px-10 items-center rounded-lg border-b-rose-700'>
        <img class='w-10 h-8' src ="${element.category_icon}"alt="" 
        <h1>${element.category}</h1>
        </button>
        `
        btnContainer.appendChild(divbtn)
    });
}
const petsByCategory =async (category)=>{
    removeClasses();
    addActiveClasses(category)
    loadSpiner(true)
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    const data = await res.json()
    
    setTimeout(()=>{
        displayAllPets(data.data)
        storedPetdata = data.data;
        loadSpiner(false);
    },2000)
    
}
const allPets=async()=>{
    loadSpiner(true)
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets')
    const data = await res.json()
   
    setTimeout(()=>{
        displayAllPets(data.pets)
        storedPetdata = data.pets
        loadSpiner(false)
    },2000)
   
}

allPets()

    const displayAllPets=(petsAnimals)=>{
      
    const petsAnimalContainer = document.getElementById('pets-animal-by-category');
        // petsAnimalContainer.innerHTML = '';
        if(petsAnimals.lenhth === 0 ){
            petsAnimalContainer.classList.remove('grid');
            petsAnimalContainer.innerHTML = `
            <div class = 'bg-gray-400 p-20 rounded-xl text-center space-y-4'>
                <h1>bird Data</h1>
            </div>
            `

            return
        }
        else{
            petsAnimalContainer.classList.add('grid');
        }
    petsAnimals.forEach(item=>{
   
    const petsDiv = document.createElement('div');
    // petsDiv.classList.add('rounded-lg' ,'border-black')
    petsDiv.innerHTML=`
    <img src="${item.image} "alt=""
    <h1>${item.category} </h1>
    <p>${item.breed} </p>
    <p>${item.date_of_birth} </p>
    <p>${item.price} </p>
    <p>${item.gender} </p>
    <hr></hr>
    <div class= 'flex gap-4'>
        <button onclick="likeBtn('${item.image}')" class='btn'>Like</button>
        <button onclick="adoptModal(this)" class='btn'>Adopt</button>
        <button onclick="petsByDetails('${item.petId}')" class='btn'>Details</button>
    </div>
    `
    petsAnimalContainer.appendChild(petsDiv)
})
}
const likeBtn =(imgUrl)=>{
  const likebtnContainer = document.getElementById('like-btn');
  const div = document.createElement('div');
  div.innerHTML = `<img class ='rounded-lg w-30 h-16' src = "${imgUrl}" alt= "" />`
   likebtnContainer.appendChild(div);
}
 const sort = ()=>{
    loadSpiner(true)
    const sortedData = storedPetdata.sort((a,b)=>b.price - a.price);
    setTimeout(()=>{
        loadSpiner(false)
        displayAllPets(sortedData)
    },2000)
 }