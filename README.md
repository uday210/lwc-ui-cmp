# lwc-material-ui

Here will be some information about the app.

## How to start?

Start simple by running `yarn watch` (or `npm run watch`, if you set up the project with `npm`). This will start the project with a local development server.

The source files are located in the [`src`](./src) folder. All web components are within the [`src/modules`](./src/modules) folder. The folder hierarchy also represents the naming structure of the web components.

Find more information on the main repo on [GitHub](https://github.com/muenzpraeger/create-lwc-app).


# Examples :
### Alert
```html
 <my-alert 
           message="This is error"
           severity="error"></my-alert>
 <br />
 <my-alert
            message="This is error with close action"
            severity="error"
            isclosable="true"
        ></my-alert>
```

### Appbar
```html
 <my-appbar>
        <h2>Material like UI components for LWC</h2>
 </my-appbar>
```

### Badge
```html
    <my-badge></my-badge>
    <my-badge badgevalue="20">Notifications</my-badge>
```

### Buttonui
```html
        <my-buttonui
            name="Button"
            onbuttonclick={buttonClicked}
            variant=""
        ></my-buttonui>
        &nbsp;
        <my-buttonui
            name="Primary Button"
            onbuttonclick={buttonClicked}
            variant="primary"
        ></my-buttonui>
        &nbsp;
        <my-buttonui
            name="Danger Button"
            onbuttonclick={buttonClicked}
            variant="danger"
        ></my-buttonui>
        &nbsp;
        <my-buttonui
            name="accent Button"
            onbuttonclick={buttonClicked}
            variant="accent"
        ></my-buttonui>
```

### Datepicker
```html
 <my-datepicker></my-datepicker>
```

### Divider
```html
        Content 1
        <my-divider></my-divider>
        Content 2
        <my-divider></my-divider>
        Content 3
        <my-divider></my-divider>
        Content 4
        <my-divider></my-divider>
        Content 5

```
