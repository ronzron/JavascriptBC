const input = document.querySelector('#username');

input.addEventListener('keydown', function(e) {
    console.log("key down");
});


input.addEventListener('keyup', function(e) {
    console.log("key up");
});


input.addEventListener('keypress', function(e) {
    console.log("key press");
});

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#item');

addItemInput.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        if(!this.value) return;
        // adding new item to list
        const newItemText = this.value;
        const newItem = document.createElement('li');
        newItem.innerText = newItemText;
        itemsUL.appendChild(newItem);
        this.value = '';
    }
}) // simple key press