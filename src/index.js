import HelloWorldButton from "./components/hello-world-button/hello-world-button";

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

function add(x) {
    return x + 10;
}
  
function subtract(x) {
    return x - 5;
}

// Without pipeline operator
let val1 = add(subtract(add(subtract(10))));
console.log(val1);

// Using pipeline operator
let val2 = 10 |> subtract |> add |> subtract |> add;
console.log(val2);