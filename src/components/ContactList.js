import React from "react"
import Contact from "./Contact"

const users = [
  {
    name: 'Loloyo',
    avatar: 'https://images.dog.ceo/breeds/pembroke/n02113023_12192.jpg',
    online: false
  },
  {
    name: 'Ruby',
    avatar: 'https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_2069.jpg',
    online: true
  },
  {
    name: 'Scania',
    avatar: 'https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_14126.jpg',
    online: true
  },
  {
    name: 'Rapido',
    avatar: 'https://images.dog.ceo/breeds/corgi-cardigan/n02113186_1695.jpg',
    online: false
  },
  {
    name: 'Roxy',
    avatar: 'https://images.dog.ceo/breeds/vizsla/n02100583_10425.jpg',
    online: true
  }
];


const ContactList = () => 

  <div className="contactList">
    {users.map(user => (<Contact nameavatar={user.name} image={user.avatar} online={user.online} />))}
  </div>

export default ContactList;