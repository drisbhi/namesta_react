const heading = React.createElement('h1' , 
{
    id : 'heading' 
} , 'Hello World ! with React');
console.log(heading) 
// it nothing buts returns object
 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);