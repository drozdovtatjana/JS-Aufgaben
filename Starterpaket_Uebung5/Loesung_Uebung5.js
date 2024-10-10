// ADD ALL NEEDED ELEMENTS

const section = document.createElement('section');


const heading = document.createElement('h2');
heading.textContent = 'My Task List';  
section.appendChild(heading);


const paragraph = document.createElement('p');
paragraph.textContent = 'Here are your tasks:'; 
section.appendChild(paragraph);


const ul = document.createElement('ul');
ul.id = 'myList';
const tasks = ['Aufgabe1', 'Aufgabe2', 'Aufgabe3'];  


tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task;
    ul.appendChild(li);
});

section.appendChild(ul);


const addItemButton = document.createElement('button');
addItemButton.id = 'addItemButton';
addItemButton.textContent = 'ADD!';
section.appendChild(addItemButton);


const deleteItemButton = document.createElement('button');
deleteItemButton.id = 'deleteItemButton';
deleteItemButton.textContent = 'DELETE!';
section.appendChild(deleteItemButton);


document.body.appendChild(section);



//5.3. ADD NEW LIST ELEMENT

document.getElementById("addItemButton").addEventListener("click", functionAddListElement);
function functionAddListElement() {
let li = document.createElement("li");
li.textContent = "neue Aufgabe"; 
document.getElementById("myList").appendChild(li);
}

//5.4. ADD IMAGE


const image = document.createElement("img");
image.src = "myImage.jpg";
document.body.appendChild(image);



//5.5. CHANGE EXISTING TEXT

document.getElementById("container").innerHTML = "Hallo!";


// 5.BONUS_1 DELETE FIRST LIST ELEMENT + SHOW MESSAGE IF NOTHING LEFT

document.getElementById("deleteItemButton").addEventListener("click", functionDeleteListElement);

        function functionDeleteListElement() {
            let myList = document.getElementById("myList");
            if (myList.children.length > 0) {  
                myList.removeChild(myList.firstElementChild);  
            } else {
                alert("Keine Listelemente mehr vorhanden!");
            }
        }


// 5.BONUS_2  ADD CSS STYLES
const style = document.createElement('style');
style.textContent = `


    #container{
        border-radius: 8px;

    }

    section {
        border-radius: 8px;
        padding: 20px;
        margin: 20px 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        background: #e0e0e0;
        margin: 5px 0;
        padding: 10px;
        border-radius: 5px;
    }

    button {
        background-color: violet;
        color: white;
        border-radius: 5px;
        cursor: pointer;
        margin-right: 10px;
    }

    button:hover {
        background-color: black;
    }

    img {
        max-width: 100%;
        border-radius: 8px; 
    }
`;
document.head.appendChild(style);


// 6. DELETE LI ELEMENTS BY CLICKING ON THEM
 const list = document.getElementById('myList');

list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log('Clicked:', event.target.innerText);
        event.target.remove();
    }
});
