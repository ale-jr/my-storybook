import React from 'react'
import MeStory from './about/me'
import WelcomeStory from './about/welcome'
export default {
  title: 'Sobre',
  id: 'about'
}

export const Welcome = () => <WelcomeStory />
Welcome.story = {
  name: 'Hello!'
}

export const Me = () => <MeStory />
Me.story = {
  name: 'Este dev'
}
