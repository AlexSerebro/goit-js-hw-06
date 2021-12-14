const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const addList = document.querySelector('ul');


// const makelistCard = ({url, alt}) => {
//   const listEl = document.createElement('li');
//   listEl.classList.add("item")

//   const imgEl = document.createElement('img');
//   imgEl.src = url;
//   imgEl.alt = alt;
//   listEl.append(imgEl);
//   return listEl;
// };

// const imgCards = images.map(makelistCard);
// console.log("~ imgCards", imgCards)

// addList.append(...imgCards)

const makeListCard = image=> {
  return `
    <li class='item'>
      <img src="${image.url}" alt="${image.alt}" class= 'item--img'>
      </li>
    </ul>
    `
}



const makeList = images.map(makeListCard).join('');
// console.log("~ makeLis", makeList)

addList.insertAdjacentHTML("afterbegin", makeList);
