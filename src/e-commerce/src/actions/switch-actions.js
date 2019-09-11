import switchConstants from '../constants/switch-constants'

export const physicalSelected = (products) => {
    return {
        type: switchConstants.PHYSICAL_SELECTED,
        products
    }
}

export const digitalSelected = (products) => {
    return {
        type: switchConstants.DIGITAL_SELECTED,
        products
    }
}
