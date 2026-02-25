import { FaCheck } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import type { PointerProps } from '../utils/types'

const Pointer = ({ included, pointerCopy }: PointerProps) => {
    return (
        <div className='flex items-center gap-2'>
            {included ? <FaCheck size={16} color='#16a34a' /> : <RxCross2 color='#dc2626' />}
            <p className='whitespace-nowrap overflow-x-auto'>{pointerCopy}</p>
        </div>
    )
}

export default Pointer