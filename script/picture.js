
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

}

// create DisplayCategories
const displayCategories = (categories) => {
      const categoryContainer = document.getElementById("categories");

   categories.forEach((item) => {
      console.log(item);
      // create a button
      const button = document.createElement("button");
      button.classList = "btn";
      button.innerText = item.category;

      // add button to category container
      categoryContainer.append(button);
   });
};

loadCategories();
