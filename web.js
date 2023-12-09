// CALLING THE ELEMENTS FROM HTML
const home = document.getElementById("home")
const credits = document.getElementById("credits")
const refrsh = document.getElementById("refrsh")
const popUp = document.getElementById('pop-up')
const itemCall = document.getElementById('item-call')
const exit = document.getElementById('back')
let searchBar = document.getElementById("search-bar")
const submit = document.getElementById('submit')
var slogans = document.getElementById("tagline")
const arr = ["Rain or shine, it's a fine time to dine.", "It's time to enjoy the finer things in life.", "Bringing class to cuisine.",
    "Foodies welcome here.", "Good food. Good mood.", "You're in good hands with us.", "Food that makes you say wow.", "Your belly knows best."]

// FOR THE FETCH PART
let apiImg = document.getElementById("call-api")
let dishName = document.getElementById('dish-name')
let ingImg = document.getElementById("call-api1")
let ingDish = document.getElementById('dish-name1')
let ingredientList1 = document.getElementById("list-ing")
let ingredientList2 = document.getElementById("list-ing2")
let catoNames = document.querySelectorAll('#dish-name2')
let catoImg = document.querySelectorAll('#cato-img')


// EVENT LISTNERS FOR THE HOME CREDITS AND REFRESH BUTTON
home.addEventListener("click", () => {
    window.location.href = 'index.html';
})
credits.addEventListener("click", () => {
    window.location.href = 'credits.html';
})
refrsh.addEventListener("click", () => {
    window.location.href = 'main.html';
})
// DONE


// MODAL POP-UP PART
itemCall.addEventListener("click", () => {
    popUp.classList.add('showpop');
})
exit.addEventListener("click", () => {
    popUp.classList.remove('showpop');
})


// SEARCH MODAL CALLING
const popUp1 = document.getElementById('pop-up1')
const itemCall1 = document.querySelectorAll('#item-call1')
const exit1 = document.getElementById('back1')
const imgCall1 = document.querySelector(".img-call1")
const nameCall1 = document.querySelector(".name-call1")
const dishCall1 = document.querySelector("#src-dish1")


// SEARCH MODAL POP
itemCall1.forEach(el => {
    el.addEventListener("click", () => {
        popUp1.classList.add('showpop1');
    })
})
exit1.addEventListener("click", () => {
    popUp1.classList.remove('showpop1');
})

// 
// DONE


// GENRATING RANDOM TAGLINES 
slogans.textContent = arr[getRandom(7, 0)]
//DONE


// SEARCH BAR PART  
var submitValue
var foodName
submit.addEventListener("click", () => {
    submitValue = searchBar.value
    // console.log(submitValue)
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${submitValue}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            // console.log(data)
            imgCall1.src = data.meals[0].strMealThumb
            dishCall1.textContent = data.meals[0].strMeal
            foodName = data.meals[0].strMeal
            let mealcount = 0;
            catoNames.forEach(ele => {
                ele.textContent = data.meals[mealcount].strMeal
                mealcount++;

            });
            let mealcount1 = 0;
            catoImg.forEach(ele => {
                ele.src = data.meals[mealcount1].strMealThumb
                mealcount1++
            })
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    // console.log(data)
                    let arr1 = [];
                    arr1.push(data.meals[0].strIngredient1, data.meals[0].strIngredient2, data.meals[0].strIngredient3, data.meals[0].strIngredient4,
                        data.meals[0].strIngredient5, data.meals[0].strIngredient6, data.meals[0].strIngredient7, data.meals[0].strIngredient8,
                        data.meals[0].strIngredient9, data.meals[0].strIngredient10, data.meals[0].strIngredient11, data.meals[0].strIngredient12,
                        data.meals[0].strIngredient13, data.meals[0].strIngredient14, data.meals[0].strIngredient15,
                        data.meals[0].strIngredient16, data.meals[0].strIngredient17, data.meals[0].strIngredient18, data.meals[0].strIngredient19,
                        data.meals[0].strIngredient20)
                    // console.log(arr1)
                    // CODE FOR SHOWING THE INGREDIENTS
                    let ul1 = document.createElement('ul')
                    arr1.forEach(ele => {
                        // console.log(ele)
                        let li = document.createElement('li');
                        if (ele == '' || ele == null) {
                            return;
                        }
                        else {
                            li.textContent = ele;
                        }
                        ul1.appendChild(li)
                    });
                    ingredientList2.appendChild(ul1)
                    // console.log(ingredientList2)
                })
        })
        .catch(rej => {
            console.log("Check the error", rej)
        })
})

function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//DONE


// FETCH PART
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => {
        return res.json();
    })
    .then(data => {
        // console.log(data)
        apiImg.src = data.meals[0].strMealThumb
        dishName.textContent = data.meals[0].strMeal
        ingImg.src = data.meals[0].strMealThumb
        ingDish.textContent = data.meals[0].strMeal
        let arr = [];
        arr.push(data.meals[0].strIngredient1, data.meals[0].strIngredient2, data.meals[0].strIngredient3, data.meals[0].strIngredient4,
            data.meals[0].strIngredient5, data.meals[0].strIngredient6, data.meals[0].strIngredient7, data.meals[0].strIngredient8,
            data.meals[0].strIngredient9, data.meals[0].strIngredient10, data.meals[0].strIngredient11, data.meals[0].strIngredient12,
            data.meals[0].strIngredient13, data.meals[0].strIngredient14, data.meals[0].strIngredient15,
            data.meals[0].strIngredient16, data.meals[0].strIngredient17, data.meals[0].strIngredient18, data.meals[0].strIngredient19,
            data.meals[0].strIngredient20)
        // console.log(arr)

        // CODE FOR SHOWING THE INGREDIENTS
        let ul = document.createElement('ul')
        arr.forEach(ele => {
            // console.log(ele)
            let li = document.createElement('li');
            if (ele == '' || ele == null) {
                return;
            }
            else {
                li.textContent = ele;
            }
            ul.appendChild(li)
        });

        ingredientList1.appendChild(ul)
        // console.log(ul)

    })
    .catch(rej => {
        console.log("Check th error", rej)
    })
//DONE