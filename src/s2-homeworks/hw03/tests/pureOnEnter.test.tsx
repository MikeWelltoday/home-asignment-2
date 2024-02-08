import React from 'react'
import {pureOnEnter} from '../GreetingContainer'

let added: any
const addUser = () => {
    added = true
}

beforeEach(() => {
    added = false
})

test.skip('name 1', () => {
    pureOnEnter({key: 'Enter'} as any, addUser)
    expect(added).toBe(true)
})
test.skip('name 2', () => {
    pureOnEnter({key: ''} as any, addUser)
    expect(added).toBe(false)
})
