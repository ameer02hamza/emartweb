import { cardType, categoryType } from "@/interfaces/card.type";
import { FaShippingFast, FaNodeJs, FaHtml5, FaCss3, FaSass } from "react-icons/fa";
export const cardInfoList: cardType[] = [
    {
        icon: <FaShippingFast className="text-4xl text-red-500" />,
        title: "React",
        description: "A JavaScript library for building user interfaces",
    },
    {
        icon: <FaNodeJs className="text-4xl text-red-500" />,
        title: "Node.js",
        description: "An open-source, cross-platform, back-end JavaScript runtime environment",
    },
    {
        icon: <FaHtml5 className="text-4xl text-red-500" />,
        title: "HTML5",
        description: "The latest evolution of the standard that defines HTML",
    },
    {
        icon: <FaCss3 className="text-4xl text-red-500" />,
        title: "CSS3",
        description: "The latest evolution of the Cascading Style Sheets language",
    },
    {
        icon: <FaSass className="text-4xl text-red-500" />,
        title: "Sass",
        description: "The latest evolution of the Cascading Style Sheets language",
    },
];
export const cardCatList: categoryType[] = [
    {
        title: "Men",
        imageUrl: "https://manofmany.com/_next/image?url=https%3A%2F%2Fapi.manofmany.com%2Fwp-content%2Fuploads%2F2023%2F05%2FLounge-Suit-Dress-Code-Guide-for-Men.jpg&w=1200&q=75"
    },
    {
        title: "Women",
        imageUrl: "https://sitarastudio.pk/cdn/shop/articles/87_3.webp?v=1707206116"
    },
    {
        title: "Kids",
        imageUrl: "https://cdn.bfab.com/_next/image?url=https%3A%2F%2Fadmin.bfab.me%2Fmedia%2Fimg%2FGroup%2062623mob.png&w=3840&q=90"
    },
]