// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    // Add Elements
    const headerShell = document.createElement('div');
            date = document.createElement('span');
            headerTitle = document.createElement('h1');
            temp = document.createElement('span');

    // Add classes
    headerShell.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    // Add content
    date.textContent = 'MARCH 28, 2019';
    headerTitle.textContent = "Lambda Times";
    temp.textContent = "98°";

    // Set Structure
    headerShell.appendChild(date);
    headerShell.appendChild(headerTitle);
    headerShell.appendChild(temp);

    return headerShell;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());