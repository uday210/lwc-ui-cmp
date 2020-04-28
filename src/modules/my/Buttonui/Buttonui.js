import { LightningElement, api } from 'lwc';
import 'Buttonui.css';

export default class Buttonui extends LightningElement {
    baseVariant = 'mui-btn ';
    @api
    variant = '';
    @api
    name = '';

    doClick(event) {
        this.dispatchEvent(new CustomEvent('buttonclick'));
    }

    get getActualVariant() {
        return `${this.baseVariant} mui-btn--${this.variant}`;
    }
}
