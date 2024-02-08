import React from 'react'
import {pureAddUser} from '../GreetingContainer'

let name: any
const setName = (a: any) => {
    name = a
}
let error: any
const setError = (a: any) => {
    error = a
}
let added: any
const addUserCallback = () => {
    added = true
}

beforeEach(() => {
    name = ''
    error = ''
    added = false
})

test.skip('name 1', () => {
    name = '1'
    pureAddUser(name, setError, setName, addUserCallback)
    expect(name).toBe('')
    expect(error).toBe('')
    expect(added).toBe(true)
})
test.skip('name 2', () => {
    name = ''
    pureAddUser(name, setError, setName, addUserCallback)
    expect(name).toBe('')
    expect(error).toBe('Ошибка! Введите имя!')
    expect(added).toBe(false)
})
test.skip('name 3', () => {
    name = '    '
    pureAddUser(name, setError, setName, addUserCallback)
    expect(name).toBe('    ')
    expect(error).toBe('Ошибка! Введите имя!')
    expect(added).toBe(false)
})
