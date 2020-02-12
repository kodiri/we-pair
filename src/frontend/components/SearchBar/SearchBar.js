import React from 'react';
//import '../App.css';
import './SearchBar.css';

// Start array of user objects
// const users = [
//   {
//     id: 1,
//     name: 'Anitha Dharneedharan ',
//     Language: 'JavaScript',
//     Location: 'Sutton'
//   },
//   {
//     id: 2,
//     name: 'Florin Dumitru',
//     Language: 'Python',
//     Location: 'Walthamstow'
//   },
//   {
//     id: 3,
//     name: 'Kainy Ryu',
//     Language: 'Java',
//     Location: 'Bethnal Green'
//   },
//   {
//     id: 4,
//     name: 'Kamila Lew',
//     Language: 'C++',
//     Location: 'Heathrow'
//   },
//   {
//     id: 5,
//     name: 'Selchuk Karakus',
//     Language: 'Ruby',
//     Location: 'Leytonstone'
//   }
// ];

// End of user objects

export default function SearchBar() {
  return (
    <div className="Search">
      <input className="Search-language-input search-bar" type="search" placeholder="search language"/>
      <input className="Search-location-input search-bar" type="search" placeholder="search location"/>
    </div>
  );
}
