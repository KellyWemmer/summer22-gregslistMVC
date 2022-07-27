import { ProxyState } from "../AppState.js"

// import { carsService } from "../Services/CarsService"



function _drawHouses(){
  // GET THE HOUSES TEMPLATE  
  let template = ''
  let house = ProxyState.house
  house.forEach(h => template += h.Template)
  document.getElementById('listings').innerHTML = template
}
// _drawHouses()//logged successful

// `Price: ${h.price}, Bed/Bath: ${h.bath}/${h.bath}`

export class HousesController{
  constructor(){
    console.log("constructor Working")
  }

  viewHouses(){    
    _drawHouses()
    // swap out car form with house form
  }

  submitHouse(){
    console.log("This house was submitted!!!")//flashed error, makes sure you have the correct controller name!
    window.event.preventDefault()
    let form = window.event.target
    console.log(form);
  }

}