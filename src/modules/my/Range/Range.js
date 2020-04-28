import { LightningElement, api, track } from 'lwc';

export default class Range extends LightningElement {
    @api
    valueIs = 5;
    @api
    minValue = 0;
    @api
    maxValue = 100;
    @api
    step = 1;
    @track
    currentvalue = 0;

    connectedCallback() {
        this.currentvalue = JSON.parse(JSON.stringify(this.valueIs));
    }
    valueChanged(event) {
        //  alert(event.target.value);
        this.valueIs = event.target.value;
        this.dispatchEvent(
            new CustomEvent('scalechange', { detail: event.target.value })
        );
    }
}
