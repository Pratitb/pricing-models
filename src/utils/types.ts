export interface TabProps {
    tabName?: string
    active?: boolean
    getActionFn?: () => void
}

export type ActiveTab = 'bronze' | 'silver' | 'gold'

export interface ModelDetailProps {
    modelName?: string
    setType?: string
    price?: number
    iconCount?: number
    colorVersionCout?: number
    getSourceInclusion?: boolean
    getResponsiveInclusion?: boolean
}
export interface PointerProps {
    included?: boolean
    pointerCopy?: string
}