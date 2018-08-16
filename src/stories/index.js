import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'


import Profile from './../templates/Profile'
import Login from './../templates/Login'

import FoodSearch from './../organisms/FoodSearch'
import FoodCard from './../organisms/FoodCard'

import { Button, Welcome } from '@storybook/react/demo'

storiesOf('templates', module)
    .add('Profile', () => <Profile />)
    .add('Login', () => <Login />)

storiesOf('organism', module)
    .add('FoodSearch', () => <FoodSearch/>)
    .add('FoodCard', () => <FoodCard/>)

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
    .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
        😀 😎 👍 💯
            </span>
        </Button>
    ))
