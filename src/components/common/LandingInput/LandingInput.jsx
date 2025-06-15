import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import SearchButton from './SearchButton';

const LandingInput = ({ setQueryProp, showSearchFilter = true, inputStyle, holderStyle, setQuery }) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch()
    const [SearchValue, setSearchValue] = useState("1")
    const [disableKey, setDisableKey] = useState(null)
    const Navigate = useNavigate()
    const [initialSearchValue, setInitialSearchValue] = useState("")
    const selectItems = i18n.language === 'fa' ? selectItems_FA : selectItems_EN;
    const clickStatus = location.pathname.includes('userPanel');

    // Find the searched item
    const { pathname } = useLocation()
    const Path = SearchValue && selectItems.find(el => el.id == SearchValue)

    // Select the desired setQuery
    console.log(SearchValue)
    const setHeaderQuery = selectItems_FA[SearchValue - 1].action
    const setQuerySel = setQuery ?? setHeaderQuery;

    // Set the search input value to the desired query
    const SetFilterQuery = () => {
        if (!clickStatus) {
            if (initialSearchValue != "") {
                dispatch(setQuerySel(initialSearchValue));
                Navigate(Path.path);
            }
            else { dispatch(setQuerySel(undefined)); }
        }
    }
    const SetQueryProps = (value) => {
        if (setQueryProp) dispatch(setQueryProp(value))
    }

    const handleEnableKeys = () => {
        if (pathname == "/courses") setSearchValue("2")
        if (pathname == "/course-detail/:id") setSearchValue("1")
        if (pathname == "/ArticlesAndNews") setSearchValue("1")
        if (pathname == "/article-detail/:id") setSearchValue("1")
        // if (pathname == "/shops") setSearchValue("1")
    }

    const handleDisableKeys = () => {
        if (pathname == "/courses") setDisableKey("1")
        else if (pathname == "/course-detail/:id") setDisableKey("2")
        else if (pathname == "/ArticlesAndNews") setDisableKey("3")
        else if (pathname == "/article-detail/:id") setDisableKey("4")
        // else if (pathname == "/shops") setDisableKey("5")
        else return null
    }

    useEffect(() => {
        handleEnableKeys()
        handleDisableKeys()
    }, [pathname])
  return (
    <div className={`w-fit border border-LightGrayish py-0.5  overflow-hidden text-sm 
        flex justify-between items-center rounded-full ${holderStyle}`}>
            <div className="w-[90%] flex items-center">
                {/* category Section */}
                {showSearchFilter && (
                    <Select
                        radius="none"
                        items={selectItems}
                        disabledKeys={[disableKey]}
                        selectedKeys={[SearchValue]}
                        className={`w-[130px] ${i18n.language == "en" ? "border-r-2" : "border-l-2"} border-LightGrayish h-[25px] flex items-center`}
                        classNames={{
                            trigger: "bg-transparent min-h-[25px] h-[25px] hover:!bg-transparent duration-500",
                            listboxWrapper: "font-IranSans select_dir",
                        }}
                        onChange={(event) => { setSearchValue(event.target.value) }}
                        renderValue={(items) => {
                            return items.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <item.data.icon className="fill-VioletBlue max-w-[20px] max-h-[20px]" />
                                    <span>{item.data.label}</span>
                                </div>
                            ));
                        }}
                    >
                        {(selectItems) => (
                            <SelectItem key={selectItems.id} textValue={selectItems.label}>
                                {selectItems.label}
                            </SelectItem>
                        )}
                    </Select>
                )}
                {/* Search Input */}
                <input onChange={(e) => { setInitialSearchValue(e.target.value); SetQueryProps(e.target.value) }} defaultValue={''} type="text" placeholder={t(Path.placeHolder)} className={`w-[200px]  h-fit outline-none px-4 ${inputStyle} bg-transparent`} />
            </div>
            <Popover placement="bottom" showArrow={true} className={`${initialSearchValue != "" ? 'hidden' : ''}`}>
                <PopoverTrigger>
                    <button onClick={SetFilterQuery} >
                        <SearchButton />
                    </button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="px-1 py-2">
                        <h1 className="font-semibold ">{t('headerSearchText')}</h1>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
  )
}

export default LandingInput
