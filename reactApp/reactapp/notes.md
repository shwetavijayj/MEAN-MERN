The react
    1. The react OM for following:
    - Component class
        1. Constructor() used to define state and behaviour for the component
        2. The render() method used to control html dom with data and behaviour.
    - Manages hierrachies of components with their lifecycle
        1. Manages parent child rendering and data sharing relationship across components.
    - The JSX this is provided through babel
            babel-preset-es2015 and babel-preset-react libs
            1. React.createClass() and React.createElement() objects for rendering
    2. The React-Dom lib
        1. Uses JSX for Rendering
            1. uses Component OM from 'react' Lib.
            2. only one "export default" per JSX
        
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
React components
- Stateless component
    - Component that have only  DOM Encapsulation and no Data(state and prop) in it.
- Statefull component
    - Has their own data
        - define using state object inside ctor
        - the state is always local component
        - The setState() method of the Component class to update the state of component.
         - setState({stateProps:value},callback function to update state in async mode);
         Note: callback is mandatory incase of state changes for <select> element  
    - Has data received from their parent component
        - defined using props parameter passed to ctor
        - the props are always  across component.
-Statefull 'Controlled-Component'
    -Event and Data binding for each editable element is used
-Statefull 'UnControlled-Component'
    -State is not defined using state object but the editable element has implicit object declaration

- React.js design pattern React 16.x+
    - Higher-order-Component (HoC)

//problem stmt
Generate table header and table rows without hardcoding
add 2 radio buttons to sort and reverse table based on criteria selected from combo


====================================
window.fetch() --> ES 6
window.request() --> wrap over fetch
axios package for AJAX calls from React to Rest

all of the above returns as "Promise" object

fetch("<URL>","{OPTIONS}")

OPTIONS
- method: GET/POST/PUT/DELETE --> GET is the default method
- headers:
- body: Carry data to server

var promise= fetch(); --> service.js
component.js
    componentDidMount() method --> make sure the following
    - All props are received for the component
    - All state properties are manipulated
    - Call render() method
        - ELEMENTS + Bindings + Events
    - componentDidMount() --> Executes all async codes e.g. REST calls subscription
    - to subscribe to promise
     - promise.then() // receive data - .then() // to process data inside component - .catch() //if error occures
     promise.then().then().catch();