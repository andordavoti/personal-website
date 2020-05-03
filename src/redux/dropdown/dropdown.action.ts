import { HIDE_DROPDOWN } from './dropdown.types'

export const hideDropdown = (value: boolean) => ({
    type: HIDE_DROPDOWN,
    payload: value
})