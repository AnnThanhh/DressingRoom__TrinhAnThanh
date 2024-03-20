export class ListChosenItem {
    constructor(){
        this.listArray = new Array(); 
    }
    addItem = (chosenItem) =>{
        this.listArray.push(chosenItem); 
    }
}