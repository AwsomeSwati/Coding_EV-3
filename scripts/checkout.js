// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let check_amount = JSON.parse(localStorage.getItem("amount")) || []

let check_total =  document.getElementById("wallet")
check_total .innerText = check_amount


let selected_movie = JSON.parse(localStorage.getItem("movie")) ||[]
console.log(selected_movie);



selected_movie.map(function(el){

let movies_div = document.getElementById("movie");

    let box = document.createElement("div")

        let img = document.createElement("img");
        img.src = el.Poster

        let name = document.createElement("p");
        name.innerText = el.Title;
        
        box.append(name,img)

        movies_div.append(box);
        document.querySelector("body").append(movies_div)
})


function confirmBook(){

  let no_of_seats = document.getElementById("number_of_seats").value ;
  
  let amount1 = Number(no_of_seats) * 100;
  console.log(amount1)

  if(amount1 > check_amount){
      alert("Insufficient Balance!")

  }
  else{
      alert("Booking successful!");
  }
}