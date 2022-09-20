import { LightningElement } from "lwc";

export default class App extends LightningElement {
    

    
    account = {
      Name: "",
      Peso: "",
      Altura: "",
    } ;


    handleInputChange(event){
        
        let name = event.target.name;
        let value = event.detail.value;

        this.account = {
           ...this.account, [name]:value
        } ;

        console.log(this.account);
    }
  
}