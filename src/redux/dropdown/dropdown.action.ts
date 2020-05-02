import { HIDE_DROPDOWN } from './dropdown.types'

export const hideDropdown = value => ({
    type: HIDE_DROPDOWN,
    payload: value
})