import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track
    slotnames = ['slot1', 'slot2'];
    @track
    scalevalue = 4;
    @track
    overlay = false;
    @track
    loader = false;
    @track
    showModal = false;

    scalechanged(event) {
        this.scalevalue = event.detail;
    }
    openModal() {
        this.showModal = true;
    }
    closeModal() {
        this.showModal = false;
    }
    startOverlay() {
        this.overlay = true;
      //  setTimeout(() => {
       //     this.overlay = false;
       // }, 5000);
    }
    startLoader() {
        this.loader = true;
      //  setTimeout(() => {
       //     this.loader = false;
       // }, 5000);
    }

    tabs = [
        {
            id: 1,
            name: 'Tab 1'
        },
        {
            id: 2,
            name: 'Tab 2'
        },
        {
            id: 3,
            name: 'Tab 3'
        }
    ];

    steps = [
        {
            id: 1,
            name: 'S - controls'
        },
        {
            id: 2,
            name: 'VF Pages'
        },
        {
            id: 3,
            name: 'VF Components'
        },

        {
            id: 4,
            name: 'AURA Components'
        },

        {
            id: 5,
            name: 'LWC'
        }
    ];
    headers = [
        {
            id: 1,
            label: 'col 1',
            field: 'name'
        },
        {
            id: 2,
            label: 'col 2',
            field: 'email'
        },
        {
            id: 3,
            label: 'col 3',
            field: 'phone'
        }
    ];
    data = [
        {
            name: 'uday',
            email: 'uday.sfdc1991@gmail.com',
            phone: '+91 XX-XXX-XXXX'
        },
        {
            name: 'surya',
            email: 'surya.sfdc1991@gmail.com',
            phone: '+91 99-XXX-XXXX'
        }
    ];
    doClick() {
        console.log('do Click');
    }

    buttonClicked() {
        console.log('Button clicked');
    }
    tabchanged(event) {
        console.log('current Tab : ' + event.detail);
    }
    stepchanged = (event) => {
        console.log('current Step : ' + event.detail);
    };
}
