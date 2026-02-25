import type { ActiveTab } from "./types"

export const pricingTabs: ActiveTab[] = ['bronze', 'silver', 'gold']

export const modelInclusions = {
    bronze: {
        type: 'bronze',
        price: 100,
        numberOfIcons: 100,
        sourceFiles: true,
        responsive: false,
    },
    silver: {
        type: 'silver',
        price: 200,
        numberOfIcons: 200,
        sourceFiles: true,
        responsive: true,
    },
    gold: {
        type: 'gold',
        price: 300,
        numberOfIcons: 300,
        sourceFiles: true,
        responsive: true,
    },
}

export const pointerData = {
    source: 'included source files',
    responsive: 'converted to responsive components',
}