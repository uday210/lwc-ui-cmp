import { LightningElement, api, track } from 'lwc';
import 'Alert.css';

export default class Alert extends LightningElement {
    @api
    message = '';
    @api
    severity = '';
    @api
    isclosable = false;
    @track
    showAlert = true;

    get isError() {
        return this.severity == 'error';
    }
    get isWarning() {
        return this.severity == 'warning';
    }
    get isInfo() {
        return this.severity == 'info';
    }
    get isSuccess() {
        return this.severity == 'success';
    }
    closeAlert() {
        this.showAlert = false;
    }
}
