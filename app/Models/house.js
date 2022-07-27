import { generateId } from "../Utils/generateId.js";

export class House {
    constructor({id, year, price, bed, bath, img, description}){
        this.id = generateId()
        this.year = year,
        this.price = price,
        this.bed = bed,
        this.bath = bath,
        this.img = img
        this.description = description
    }

    get Template (){
        return `
        <div class="col-4 p-3">
          <div class="bg-white elevation-2">
            <img class="img-fluid" src="https://thiscatdoesnotexist.com" alt="">
            <div class="p-2">
              <h4 class="text-center"> ${this.bed}/${this.bath} | Year: ${this.year}</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corrupti possimus neque quas,
                dignissimos itaque at aspernatur.</p>
              <p class="text-end m-0">$<b>${this.price}</b></p>
            </div>
          </div>
        </div>
        `
    }
}