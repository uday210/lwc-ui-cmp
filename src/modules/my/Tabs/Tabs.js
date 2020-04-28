import { LightningElement, api, track } from 'lwc';
import 'Tabs.css';

export default class Tabs extends LightningElement {
    @api
    tabs = [];
    @track
    tabsclone = [];

    tabClicked() {}
    activetab = 1;
    ActiveTabId(event) {
        return this.activetab;
    }

    tabClicked(event) {
        this.tabsclone.forEach((each) => {
            each['classname'] = '';
        });
        this.tabsclone[event.target.dataset.tabid - 1]['classname'] =
            'mui--is-active';
        this.dispatchEvent(
            new CustomEvent('tabchange', { detail: event.target.dataset.tabid })
        );
    }
    connectedCallback() {
        this.tabsclone = JSON.parse(JSON.stringify(this.tabs));
        this.tabsclone[0]['classname'] = 'mui--is-active';
    }
}
