import Home from '@/views/Home'
import About from '@/views/About'
import Contacts from '@/views/Contacts'

export default [
  {
    name: 'Home',
    path: '/',
    component: Home,
    meta: {
      displayName: 'Namai',
      displayPageTitle: 'Projektai'
    }
  },
  {
    name: 'About',
    path: '/about',
    component: About,
    meta: {
      displayName: 'Apie mane',
      displayPageTitle: 'Apie mane'
    }
  },
  {
    name: 'Contacts',
    path: '/contacts',
    component: Contacts,
    meta: {
      displayName: 'Kontaktai',
      displayPageTitle: 'Kontaktai'
    }
  }
]
