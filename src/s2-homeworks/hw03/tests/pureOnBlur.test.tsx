import React from 'react'
import {pureOnBlur} from '../GreetingContainer'

let name: any
let error: any
const setError = (a: any) => {
    error = a
}

beforeEach(() => {
    name = ''
    error = ''
})

test.skip('name 1', () => {
    name = '1'
    pureOnBlur(name, setError)
    expect(error).toBe('')
})
test.skip('name 2', () => {
    name = ''
    pureOnBlur(name, setError)
    expect(error).toBe('Ошибка! Введите имя!')
})
test.skip('name 3', () => {
    name = '    '
    pureOnBlur(name, setError)
    expect(error).toBe('Ошибка! Введите имя!')
})
