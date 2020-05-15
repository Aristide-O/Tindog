import React from "react"
import Contact from "./Contact"

const users = [
  {
    name: 'Burton',
    avatar: 'https://images.unsplash.com/photo-1526520112421-5054395689a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    online: false
  },
  {
    name: 'Bébé',
    avatar: 'https://images.unsplash.com/photo-1586225674384-48018cd72162?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=798&q=80',
    online: true
  },
  {
    name: 'Foxy',
    avatar: 'https://images.unsplash.com/photo-1572896954319-785d85e13cb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=832&q=80',
    online: true
  },
  {
    name: 'Lardon',
    avatar: 'https://images.unsplash.com/photo-1552401601-33db828218aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    online: false
  },
  {
    name: 'Lumine',
    avatar: 'https://images.unsplash.com/photo-1497993950456-cdb57afd1cf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    online: true
  }
];


const ContactList = () => 

  <div className="contactList">
    {users.map(user => (<Contact nameavatar={user.name} image={user.avatar} online={user.online} />))}
  </div>

export default ContactList;