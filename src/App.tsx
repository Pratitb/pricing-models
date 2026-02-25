import { useState } from "react";
import Tab from "./components/Tab";
import { modelInclusions, pricingTabs } from "./utils/dummyData";
import ModelDetails from "./components/ModelDetails";
import type { ActiveTab } from "./utils/types";

const App = () => {
  const [planVariant, setPlanVariant] = useState<ActiveTab>('silver')

  const handleTabClick = (tab: ActiveTab) => {
    setPlanVariant(tab)
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container">
        {/* MAIN BOX */}
        <p className="capitalize text-3xl font-semibold">pricing model</p>
        <div className="w-full max-w-[400px] bg-gray-200 rounded-lg pt-4 pb-8 px-4">
          <div className="flex justify-between gap-2 rounded-lg py-2">
            {pricingTabs?.map((tab) => <Tab key={tab} tabName={tab} getActionFn={() => handleTabClick?.(tab)} active={planVariant === tab} />)}
          </div>
          <div>
            <ModelDetails modelName={planVariant} setType="icon" price={modelInclusions[planVariant]?.price} iconCount={modelInclusions[planVariant]?.numberOfIcons} getSourceInclusion={modelInclusions[planVariant]?.sourceFiles} getResponsiveInclusion={modelInclusions[planVariant]?.responsive} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default App;
