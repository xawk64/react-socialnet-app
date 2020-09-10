export const minLengthCreator = minLength => (value = "") => {
    if (value.length < minLength) return "Min length of this field is " + minLength + " symbols"
    return undefined
}

export const  maxLengthCreator = maxLength => (value = "") => {
    let valueLength = 0
    if (value === undefined) valueLength = 0
    else valueLength = value.length

    if (valueLength > maxLength) return "Max length of this field is " + maxLength + " symbols"
    return undefined
}

export const emailValidator = (value = "") => {
    let nameSeparatorIndex = value.indexOf ("@")
    let domainSeparatorIndex = value.indexOf (".")
    let separatorsNotExists = nameSeparatorIndex === -1 || domainSeparatorIndex === -1
    let mailServiceSmaller2 = (domainSeparatorIndex - nameSeparatorIndex) < 3
    let mailNameSmaller2 = nameSeparatorIndex < 4
    if (separatorsNotExists || mailServiceSmaller2 || mailNameSmaller2) return "Email addres is not valid"
    return undefined
}