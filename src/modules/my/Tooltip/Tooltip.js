import { LightningElement, api } from 'lwc';
import 'Tooltip.css';

export default class Tooltip extends LightningElement {
    @api
    message = '';
}
