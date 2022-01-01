function isNull(val){
    return val === null
}

function isUndefined(val){
    return val === undefined
}

function isEmpty(val){
    return val === ''
}

function isExist(val){
  return !isNull(val) && isUndefined(val) && !isEmpty()
}

export {
    isNull,
    isUndefined,
    isEmpty,
    isExist
}