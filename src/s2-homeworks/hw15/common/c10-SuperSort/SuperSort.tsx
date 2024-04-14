import React from 'react'
import ArrowDownIcon from '../assets/down-square-svgrepo-com.svg'
import ArrowUpIcon from '../assets/up-square-svgrepo-com.svg'
import ArrowLine from '../assets/up-down-svgrepo-com.svg'

// добавить в проект иконки и импортировать
const downIcon = ArrowDownIcon
const upIcon = ArrowUpIcon
const noneIcon = ArrowLine

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort !== down && sort !== up) {
        return down
    } else if (sort === down) {
        return up
    } else {
        return ''
    }
}

const imgStyles = {
    width: '30px',
    height: '30px'
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort,
        value,
        onChange,
        id = 'hw15'
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
                id={id + '-icon-' + sort}
                style={imgStyles}
                src={icon}
            />
        </span>
    )
}

export default SuperSort
