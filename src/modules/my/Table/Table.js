import { LightningElement, api, track } from 'lwc';
import 'Table.css';

export default class Table extends LightningElement {
    @api
    headers = [];
    @api
    data = [];
    @track
    tableData = [];
    connectedCallback() {
        this.data.forEach((eachRow) => {
            var row = [];
            this.headers.forEach((eachHeader) => {
                console.log('eachHeader ', eachHeader.field);
                row.push(eachRow[eachHeader.field]);
            });
            this.tableData.push(row);
        });
    }
}
