const requiredValidator = () => {
    return (value) => {
        return (value !== undefined && value !== null && value !== '') || 'This is a required field'
    }
}

const ipAddressOrUrlValidator = () => {
    return (value) => {
        return (value && Boolean(value.match(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?|^((http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gm)))
    }
}

export {
    requiredValidator,
    ipAddressOrUrlValidator
}
