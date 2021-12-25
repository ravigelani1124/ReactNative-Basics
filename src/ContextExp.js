// What is Context API?
// Context provides a way to pass data through the component tree without having to pass props 
// down manually at every level.

// Context API provides clean and easy way to share state between the components
// without passing the props by React itself.

//Building Block of Context API
// Context
// Provider
// Consumer


//2.1 Context
//createContext() function from React which takes default value as a first argument

export default React.createContext({
    //default value optional
    data :'test'
});


//2.2 Provider
// After create context, Provider Provides the capability to access context which wrapped from it. 
// It provides the data and functions to pass down to all the components.


// 2.3 Consumer
// Consumer allows to access the value to child components which parent that is wrapped by Provider. 
// It has two types.

//1. <Context.Consumer>
// Context.Consumer can be used both Class based and functional components. 
// How ever, this approach the Context can be access only inside the render.

//2. static contextType
//static contextType can be used only Class based components.