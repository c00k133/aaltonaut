'use strict'

const ksas = require('../res/ksas')


exports.ksas = Object.keys(ksas).reduce((res, key) => {
    const ksa = ksas[key]
    const sections = ksa.map(section => {
        return {
            ksa: section,
            url: section.replace(/ /g, '').toLowerCase()
        }
    })

    res[key] = sections
    return res
}, {})
