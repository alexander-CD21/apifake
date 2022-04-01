import { faker } from "@faker-js/faker";

class Empresa {
    constructor(){
        this._id=Empresa.aumentar();
        this.name = faker.company.name;
        this.calle = faker.address.streetName();
        this.ciudad = faker.address.cityName();
        this.state = faker.address.state();
        this.postal = faker.address.zipCode();
        this.pais = faker.address.country();
    }
    static aumentar(){
        if(!this.id){
            this.id = 1;
        }else {
            this.id++;
        }
        return this.id;
    }
}
export default Empresa;