import { useLocation } from "react-router-dom"
import LandingInput from "./LandingInput"
import { selectItems_FA } from "../../../core/constants/sort"

const SearchModal = ({ visible, setVisible }) => {
    const location = useLocation()
    const pageSearch = selectItems_FA.find(el => el.path == location.pathname);

    return visible && (
        <div className={`${pageSearch ? "hidden" : ""}`}>
            <div onClick={() => { setVisible(false) }} style={{ opacity: visible ? "1" : "0", visibility: visible ? "visible" : "hidden", }} className={`hover:cursor-pointer w-full duration-250 h-svh fixed top-0 right-0 bg-black/55 z-[9999]`}></div>
            <div className="!w-[95%] sm:!w-[80%] lg:!w-[50%] flex flex-wrap gap-y-8 fixed top-[110px] left-[50%] translate-x-[-50%] z-[9999]">
                <LandingInput
                    maxResponsiveValue="0"
                    minResponsiveValue="0"
                    holderStyle="w-full Box-shadow2 bg-MainBg"
                />
            </div>
        </div>
    )
}

export default SearchModal
