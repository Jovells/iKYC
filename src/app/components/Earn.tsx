import { Mobile } from '@/assets/index'
import Image from 'next/image'

const Earn = () => {
    return (
        <div className='flex flex-row justify-center items-center'>
            <div>
                <p className='text-[#C1C4C5] mb-16'>Earn Gold Bars</p>
                <p className='text-[#EAEBEC] text-3xl mb-6'>iExchange, Earn <span className='text-[#FFB224]'>Gold Bars</span> and Earn future  tokens, gifts and rewards.</p>
                <p className='text-[#EAEBEC]'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptat
                    deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                    provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum </p>
            </div>
            <Image src={Mobile} alt="mobile" className='' />
        </div>
    )
}

export default Earn