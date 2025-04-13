export const mockApi = [
    {title: "", desc: "", icon: "", style: {dark: "", light: ""}, posYFlag: false},
    {title: "", desc: "", icon: "", style: {dark: "", light: ""}, posYFlag: true},
    {title: "", desc: "", icon: "", style: {dark: "", light: ""}, posYFlag: false},
    {title: "", desc: "", icon: "", style: {dark: "", light: ""}, posYFlag: true},
]

const CardWrapper = ({ title, desc, children, cardStyle, posYFlag }) => {
    return (
        <div
            className={`${cardStyle} w-6 relative top-[${posYFlag ? 20 : 40}]`}
        >
            
        </div>
    )
}