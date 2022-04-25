// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let movies_amount = JSON.parse(localStorage.getItem("amount")) || []

let movies_total =  document.getElementById("wallet")
movies_total .innerText = movies_amount


let movies_div = document.getElementById("movies");
let id;
let movie_arr =[];

async function searchMovies(){

    try{
   
        const query = document.getElementById("search").value 

        const url = `http://www.omdbapi.com/?apikey=63927689&s=${query}`;

        const res = await fetch(url);

        const data = await res.json();
        console.log(data)

        const movies = data.Search;
        console.log(movies)

        return movies;

        // appendMovies(movies)
        //we have to return 
    }

    catch(err){
       console.log("err:",err);
    }
}


function appendMovies(data) {

    movies_div.innerHTML = null

    data.map(function(el,index){

        let box = document.createElement("div")

        let img = document.createElement("img");
        img.src = el.Poster

        let name = document.createElement("p");
        name.innerText = el.Title;

        let b1 =document.createElement("button");
        b1.innerText = "Book Now";
        b1.setAttribute("class","book_now")

        let len =  data.length;
        console.log(len)
        b1.addEventListener("click",function(){
            book_movie(el,index)
        })

        // for(var i=0 ; i<len ; i++){
        //     console.log("insisde" )
             
        //     b1.addEventListener("click",function(){
        //         book_movie(el,index,i)
        //     })

        //     // b1[i].addEventListener("click",function(){
        //     //     book_movie(el,index);
        //     // })
        //    // b1[i].addEventListener("click",book_movie(el,index))
        // }
       

        box.append(img,name,b1)
       
        movies_div.append(box);
        document.querySelector("body").append( movies_div)

    })
}


function book_movie(el,index){

    console.log(el,index);
    movie_arr.push(el)

    localStorage.setItem("movie",JSON.stringify(movie_arr))
    window.location.href= "checkout.html";
}


async function main(){

    let data = await searchMovies();
    console.log("data", data)

    if (data == undefined){
        return false
    }
    else{
        appendMovies(data);
    }
}

function debounce(func,delay){

    if(id){
        clearTimeout(id);
    }

    id = setTimeout(function(){
        func();
    },delay);
}
