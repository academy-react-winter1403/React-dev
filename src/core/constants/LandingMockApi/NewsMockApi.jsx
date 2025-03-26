import n1 from '../../../assets/pics/landing/n1.png'
import n2 from '../../../assets/pics/landing/n2.png'
import n3 from '../../../assets/pics/landing/n3.png'
import n4 from '../../../assets/pics/landing/n4.png'
import n5 from '../../../assets/pics/landing/n5.png'
import n6 from '../../../assets/pics/landing/n6.png'


export const NewsApi = {
    leftItem: [
        {
            holderId: [1, 2],
            itemData: [
                {image: n2, holderId: true, pos: true, desc: "بازاریابی حسی راهی ساده و کم هزینه \n برای افزایش فروش", colSpan: true, uniquniqueHeightueWidth: "250px"},
                {image: n1, holderId: true, pos: true, desc: "دنیای آنلاین؛ راهی برای افزایش فروش", colSpan: true, uniqueHeight: "250px"},
                {image: n4, holderId: false, pos: false, desc: "نیازهای مشتری را بشناسید تا درآمدتان بیشتر شود", colSpan: false, uniqueHeight: "200px"},
            ]
        },
    ],
    rightItem: [
        {
            holderId: [1, 2],
            itemData: [
                {image: n6, holderId: false, pos: true, desc: "جذب مشتری با تبلیغات دهان به دهان", colSpan: true, uniqueHeight: "250px"},
                {image: n5, holderId: false, pos: true, desc: "ورود به دنیای آنلاین; راهی مطمین برای \n افزایش فروش", colSpan: true, uniqueHeight: "250px"},
                {image: n3, holderId: true, pos: false, desc: "از کجا مشتری پیدا کنم؟ راه‌های پیدا کردن مشتری", colSpan: false, uniqueHeight: "200px"},
            ]
        }
    ]
}

export const { leftItem, rightItem } = NewsApi