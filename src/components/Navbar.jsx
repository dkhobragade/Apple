import { appleImg, bagImg, searchImg } from "../utils"
import { navLists } from "../constants"

export default function Navbar() {

    const renderNavList = () => {
        return navLists.map((nav) => {
            return <div key={nav} className="px-5 text-sm cursor-pointer text-grey hover:text-white transition-all">
                {nav}
            </div>
        })
    }

    return <header className='w-full py-5 sm:px-10 flex justify-between items-center' >
        <nav className="flex w-full screen-max-width">
            <img src={appleImg} alt="apple" width={18} height={18} />
            <div className="flex flex-1 justify-center">
                {renderNavList()}
            </div>
            <div className="flex items-baseline gap-7 max:sm:justify-end max:sm:flex-1">
                <img src={searchImg} alt="Search" width={18} height={18} />
                <img src={bagImg} alt="Bag" width={18} height={18} />
            </div>
        </nav>
    </header>
}
