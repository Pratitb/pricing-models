import { pointerData } from "../utils/dummyData"
import type { ModelDetailProps } from "../utils/types"
import Pointer from "./Pointer"

const ModelDetails = ({ setType, price, iconCount, colorVersionCout, getSourceInclusion, getResponsiveInclusion }: ModelDetailProps) => {
    return (
        <div className="mt-4">
            {/* <p className="capitalize text-xl">{modelName}</p> */}
            <div className="flex justify-between text-xl font-semibold">
                <p className="capitalize">{setType} sets</p>
                <p className="">&#8377;{price}</p>
            </div>
            <div className="mt-3 mb-4">
                <p className="capitalize text-sm">up to <span className="underline">{iconCount}</span> creative & professional icons + {colorVersionCout} themes per month</p>
            </div>
            <div>
                <Pointer included={getSourceInclusion} pointerCopy={pointerData?.source} />
                <Pointer included={getResponsiveInclusion} pointerCopy={pointerData?.responsive} />
            </div>
        </div>
    )
}

export default ModelDetails