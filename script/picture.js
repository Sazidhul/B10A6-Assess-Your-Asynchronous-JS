
const cardDemo = {   
    "petId": 1,
    "breed": "Golden Retriever",
    "category": "Dog",
    "date_of_birth": "2023-01-15",
    "price": 1200,
    "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
    "gender": "Male",
    "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
    "vaccinated_status": "Fully",
    "pet_name": "Sunny"

};

// {
//     "petId": 1,
//     "breed": "Golden Retriever",
//     "category": "Dog",
//     "date_of_birth": "2023-01-15",
//     "price": 1200,
//     "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//     "gender": "Male",
//     "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//     "vaccinated_status": "Fully",
//     "pet_name": "Sunny"
// }

// create loadCategories

// const loadCategories = () => {
//    // fetch the data 
//   fetch("https://openapi.programming-hero.com/api/peddy/pets")
//   .then(res => res.json())
//   .then(data => displayCategories(data.pets))
//   .catch((error) => console.log(error));
// }
            // async
const loadCategories = async () => {
   const response = await fetch("https://openapi.programming-hero.com/api/peddy/categories");
   const data = await response.json();
      displayCategories(data.categories);

};

const loadPictures = async() => {
   const response = await fetch("https://openapi.programming-hero.com/api/peddy/pets");
   const data = await response.json();
      displayPictures(data.pets);
}

// create PictureCategories
const displayPictures = (pictures) =>{
   const pictureContainer = document.getElementById("pictures")
   pictures.forEach((picture) =>{
      console.log(picture);

      // creating a card 
      const  card = document.createElement("div");
      card.classList = "card  shadow-sm"
      card.innerHTML= `
      <figure class="h-[200px] p-5">
    <img
      src= ${picture.image}
      class="h-full w-full object-cover rounded-md"
      alt="Shoes" />
  </figure>
  <div class=" p-5">
     <div>
         <h2 class="font-bold">${picture.pet_name}</h2>

         <div class="flex items-center gap-2">
         <img src="images/Frame.png" />
         <p> Breed : ${picture.breed} </p>
         </div>

          <div class="flex items-center gap-2">
         <img src="images/Birth.png" />
         <p> Birth : ${picture.date_of_birth} </p>
         </div>

          <div class="flex items-center gap-2">
         <img src="images/Gender.png" />
         <p> Gender : ${picture.gender} </p>
         </div>

          <div class="flex items-center gap-2">
         <img src="images/Doller.png" />
         <p> Price : ${picture.price} </p>
         </div>
     </div> 
     <div class="flex justify-between  py-4">
        <button class="btn rounded-md"><img src="images/like.png"/></button>
        <button class="btn rounded-md text-[#0E7A81]">Adopt</button>
        <button class="btn rounded-md text-[#0E7A81]">Details</button>
     </div> 

      
  </div>
      `
     pictureContainer.append(card); 

   })
}


// create DisplayCategories
const displayCategories = (categories) => {
      const categoryContainer = document.getElementById("categories");

   categories.forEach((item) => {
      //console.log(item);
      // create a button
      const button = document.createElement("button");
      button.classList = "btn  flex items-center gap-2";
      button.innerText = item.category;
      
      // add image + text inside button
      button.innerHTML = `
         <img src="${item.category_icon}" alt="${item.category}" class="w-6 h-6 object-contain" />
         <span>${item.category}</span>
         
      `;

      // add button to category container
      categoryContainer.append(button);
   });
};

loadCategories();
loadPictures();
