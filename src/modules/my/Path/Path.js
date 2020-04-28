import { LightningElement, api, track } from 'lwc';
import 'Path.css';

export default class Path extends LightningElement {
    @api
    steps = [];
    @track
    stepsClone = [];
    @api
    defaultactivestep;

    connectedCallback() {
        this.stepsClone = JSON.parse(JSON.stringify(this.steps));
        this.stepsClone.forEach((eachStep) => {
            eachStep['className'] = 'breadcrumb__step ';
            if (this.defaultactivestep) {
                if (this.defaultactivestep != eachStep.name) {
                    // eachStep['className'] =  eachStep['className'] +' breadcrumb__step--active';
                }
                if (this.defaultactivestep == eachStep.name) {
                    eachStep['className'] =
                        eachStep['className'] + ' breadcrumb__step--active';
                    return;
                }
            }
        });
    }
    stepClicked(event) {
        const stepIs = event.target.dataset.currentstep;
        console.log('stepIs>> ', stepIs);
        this.stepsClone.forEach((eachStep) => {
            // eachStep['className'] = 'breadcrumb__step ';
            if (eachStep.name != stepIs) {
                eachStep['className'] = 'breadcrumb__step'; //eachStep['className'] +' breadcrumb__step--active';
            }
            if (eachStep.name == stepIs) {
                eachStep['className'] =
                    eachStep['className'] + ' breadcrumb__step--active';
                //  return;
            }
        });
        this.dispatchEvent(new CustomEvent('stepchanged', { detail: stepIs }));
    }
}
