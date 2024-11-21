import IMG_1087 from "@/static/images/product/IMG_1087.png";
import IMG_1044 from "@/static/images/product/IMG_1044.webp";
import PT390_1 from "@/static/images/product/PT390-1.webp";
export const P0201:Product =  {
    id:'p0201',
    name:'Standard model PT-360',
    imageUrl: IMG_1087,
    imageUrl2: IMG_1044,
    price: '$899.00',
    cutPrice: '$659.00',
    saleTag: true,
    group:'g1',
    date:'2024-01-05',
    images: [
        IMG_1087,
        IMG_1044,
        PT390_1,
        IMG_1087,
        IMG_1044,
        PT390_1,
    ],
    desc:'PT-360 portable toilet is light in weight and compact in size, super competitive price with better container loading quantity. 56 units of unassembled toilets can be fitted into a 40HQ container. Fully self-contained, it can be used approximately 450 times before the waste needs to be removed.',
    detail: {
        spec:[
            {
                label:'Waste Tank Capacity',
                value:'370L'
            },
            {
                label:'Fresh Water Tank Capacity',
                value:'110L'
            },
            {
                label:'Dimensions',
                value:'1150mm (W) x 1150mm (L) x 2350mm (H)'
            },
            {
                label:'Weight',
                value:'140kg (single skin wall panels) or 165kg (Double skin wall panels)'
            }
        ],
        material:'Sunrise Portable Toilet has been manufactured from the highest quality materials to meet or exceed most of the safety and environmental standards. The cabinet roof, door, and wall panels are made from virgin high-density polyethylene(HDPE) with UV additive; while the toilet base is made from low-density polyethylene(LDPE). This ensures that the toilet is impact resistant and impervious to water absorption while being incredibly lightweight.',
        warranty:'1 year for the pump, 5 years for the rest.',
        supply:'1000 units per month'
    }
}
