import { LightningElement, api } from 'lwc';
import iconsmap from './iconrenderhelper';

export default class Icon extends LightningElement {
    @api
    iconname = '';
    render() {
        console.log(this.iconname);
        console.log(iconsmap[this.iconname]);
        return iconsmap[this.iconname];
    }
}
