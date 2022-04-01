//importando faker
import { faker } from '@faker-js/faker';
//definiendo la clase Usuario 
class Usuario {
    constructor() {
        //Definiendo sus atributos 
        this._id  = Usuario.aumentar();
        this.firstName = faker.name.firstName(); 
        this.lastName = faker.name.lastName();
        this.phone = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();

    }

    static aumentar (){
        if( !this.id){
            this.id  = 1;
        }else {
            this.id++;
        }
        return this.id;
    }
}
//linea importante 
export default Usuario;