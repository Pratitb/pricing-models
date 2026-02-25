import type { TabProps } from '../utils/types'

const Tab = ({ tabName, active, getActionFn }: TabProps) => {
    return (
        <div className={`${active ? 'bg-gray-800 text-white' : 'bg-white'} flex-1 text-center px-4 py-2 rounded-lg shadow cursor-pointer`} onClick={getActionFn}>
            <p className='capitalize'>{tabName}</p>
        </div>
    )
}

export default Tab