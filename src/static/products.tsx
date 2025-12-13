import vid from "../vid.mp4";
import a11 from "../images/11.jpeg"
import a12 from "../images/12.jpeg"
import a21 from "../images/21.jpeg"
import a22 from "../images/22.jpeg"
import a23 from "../images/23.jpeg"
import a24 from "../images/24.jpeg"
import a31 from "../images/31.jpeg"
import a32 from "../images/32.jpeg"
import a51 from "../images/51.jpeg"
import a52 from "../images/52.jpeg"
import a1cover from "../images/1cover.png"
import a2cover from "../images/2cover.png"
import a3cover from "../images/3cover.png"
import a5cover from "../images/5cover.png"

interface IProductsList{
    title:string;
    subTitle:string;
    description:string;
    coverImage?:any;
    images:string[];
    price?:string;
}
export const productsList:IProductsList[] = [
    {
        title:"Anti Itch Herbal Scalp Toner",
        subTitle:"Anti Itch Herbal Scalp Toner Anti Itch Herbal Scalp Toner Anti Itch Herbal Scalp Toner Anti Itch Herbal Scalp Toner",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        coverImage:a1cover,
        images:[a11,a12]
    },
    {
        title:"Anti Itch Herbal Scalp Toner",
        subTitle:"Anti Itch Herbal Scalp Toner Anti Itch Herbal Scalp Toner Anti Itch Herbal Scalp Toner Anti Itch Herbal Scalp Toner",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        coverImage:a2cover,
        images:[a21,a22,a23,a24]
    },
    {
        title:"Anti Itch Herbal Scalp Toner",
        subTitle:"Anti Itch Herbal Scalp Toner Anti Itch Herbal Scalp Toner Anti Itch Herbal Scalp Toner Anti Itch Herbal Scalp Toner",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        coverImage:a3cover,
        images:[a31,a32]
    },
    {
        title:"Anti Itch Herbal Scalp Toner",
        subTitle:"Anti Itch Herbal Scalp Toner Anti Itch Herbal Scalp Toner Anti Itch Herbal Scalp Toner Anti Itch Herbal Scalp Toner",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        coverImage:a1cover,
        images:[]
    },
    {
        title:"Anti Itch Herbal Scalp Toner",
        subTitle:"Anti Itch Herbal Scalp Toner Anti Itch Herbal Scalp Toner Anti Itch Herbal Scalp Toner Anti Itch Herbal Scalp Toner",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        coverImage:a5cover,
        images:[a51,a52]
    }
]