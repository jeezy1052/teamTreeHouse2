
const perPage = 9; 

// Make the showPage function
function showPage(list, page) {
   const startIndex = (page * perPage) - perPage;
   const endIndex = page * perPage;
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   let html = '';

   for(let i = 0; i < list.length; i++) {
      if(i >= startIndex && i < endIndex) {
         html += `
                  <li class="student-item cf">
                    <div class="student-details">
                      <img class="avatar" src="${list[i].picture.thumbnail}" alt="Profile Picture">
                      <h3>${list[i].name.first} ${list[i].name.last}</h3>
                      <span class="email">${list[i].email}</span>
                    </div>
                    <div class="joined-details>
                      <span class="date">Joined ${list[i].registered.date}</span>
                    </div>
                  </li>
                `;
      }
   }
   studentList.insertAdjacentHTML('beforeend', html);
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
// Make the addPadination function
function addPagination(list) {
   const pages = Math.ceil(list.length / 9) + 1;
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   let html = '';

   for(let i = 1; i < pages; i++) {
      html += `
               <li> 
                 <button type="button">${i}</button>
               </li>
              `;
   }
   linkList.insertAdjacentHTML('beforeend', html);
   const btn = linkList.firstElementChild.firstElementChild;
   btn.className = 'active';
   
   // Make eventListener for linkList var
   linkList.addEventListener('click', (event) => {
      const target = event.target;
      if(target.tagName === 'BUTTON') {
         const allBtn = document.querySelectorAll('button');
         for(let i = 0; i < allBtn.length; i++) {
            allBtn[i].className = '';
            
         }
         target.className = 'active';
      }
      if(target.textContent === '1') {
         showPage(list, 1);
      }
      if(target.textContent === '2') {
         showPage(list, 2);
      }
      if(target.textContent === '3') {
         showPage(list, 3);
      }
      if(target.textContent === '4') {
         showPage(list, 4);
      }
      if(target.textContent === '5') {
         showPage(list, 5);
      }
      
   });
}


// Make search bar for extra credit
const header = document.querySelector('.header');
let html = '';
html = `
         <label for="search" class="student-search">
           <input id="search" placeholder="Search by name...">
           <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
         </label>       
       `;

header.insertAdjacentHTML('beforeend', html)
const searchBtn = header.querySelector('button');
const search = header.querySelector('input');

searchBtn.addEventListener('click', () => {
   
   
});

search.addEventListener('keyup', () => {
   console.log('Hey Mike Poopie Head')
});



showPage(data, 1)
addPagination(data)




// Call functions
