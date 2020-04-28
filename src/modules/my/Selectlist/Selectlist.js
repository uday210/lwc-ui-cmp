import { LightningElement, track } from 'lwc';
import 'Selectlist.css';

export default class Selectlist extends LightningElement {
    @track
    isFieldClicked = false;
    fieldClicked() {
        this.isFieldClicked = true;
    }
    optionSelected() {
        this.isFieldClicked = false;
    }
}
