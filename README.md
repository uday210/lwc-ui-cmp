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

### Icon
```html
        <my-icon iconname="arrowleft"></my-icon>
        <br />
        <my-icon iconname="arrowright"></my-icon>
        <br />
        <my-icon iconname="check"></my-icon>
```

### Linear
```html
   <my-linear></my-linear>
```

### Loader
```html
   <my-loader showloader={loader}></my-loader>
```

### Modal
```html
             <my-modal>
                <div slot="header">Hello Popup</div>
                <div slot="body">
                    You may want to render a component with more than one look
                    and feel, but not want to mix the HTML in one file. For
                    example, one version of the component is plain, and another
                    version displays an image and extra text. In this case, you
                    can import multiple HTML templates and write business logic
                    that renders them conditionally. This pattern is similar to
                    the code splitting used in some JavaScript frameworks.
                </div>
                <div slot="footer">
                    <my-buttonui
                        name="Close"
                        onbuttonclick={closeModal}
                        variant="danger"
                    ></my-buttonui>
                    &nbsp;
                    <my-buttonui
                        name="OK"
                        onbuttonclick={closeModal}
                        variant="primary"
                    ></my-buttonui>
                </div>
            </my-modal>
```

### Overlay
```html
    <my-overlay render-overlay={overlay}></my-overlay>
```

### Panel
```html
    <my-panel>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
        </p>
    </my-panel>

```

### Path
```html
        <my-path
            steps={steps}
            defaultactivestep="VF Components"
            onstepchanged={stepchanged}
        ></my-path>
```

### Range
```html
        <my-range
            value-is={scalevalue}
            step="1"
            min-value="1"
            max-value="99"
            onscalechange={scalechanged}
        ></my-range>
```


### Table
```html
    <my-table headers={headers} data={data}></my-table>
```

### Tabs
```html
   <my-tabs tabs={tabs} ontabchange={tabchanged}></my-tabs>
```
### Tooltip
```html
    This is to show the behaviour of tool tip
        <my-tooltip message="this is going to display in the tooltip"
            >hover on this</my-tooltip
        >
```
