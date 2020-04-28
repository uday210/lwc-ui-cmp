import { LightningElement, api } from 'lwc';
import 'Badge.css';

export default class Badge extends LightningElement {
    @api
    badgevalue = 0;
}
