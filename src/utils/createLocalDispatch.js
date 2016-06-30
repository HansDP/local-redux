import isPlainObject from 'lodash/isPlainObject'

export default (typePrefix, dispatch) => (action) => {

    if (!isPlainObject(action)) { throw new Error('Actions must be plain objects. Use custom middleware for async actions.') }
	if (typeof action.type === 'undefined') { throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?') }

    return dispatch({
        ...action,
        type: typePrefix + action.type
    })
}
