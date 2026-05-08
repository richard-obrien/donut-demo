import type { ProductVariant } from "@crystallize/js-api-client";

import bakeryCounterImage from "../../assets/products/bakery-counter.jpeg";
import chocolateDreamImage from "../../assets/products/chocolate-dream.png";
import creamyNonsenseImage from "../../assets/products/creamy-nonsense.png";
import mixedDelightImage from "../../assets/products/mixed-delight.png";
import strawberryBlastImage from "../../assets/products/strawberry-blast.png";
import strawberryMassacreImage from "../../assets/products/strawberry-massacre.png";
import tripleTroubleImage from "../../assets/products/triple-trouble-family-box.png";

type LocalImage = {
    key: string;
    url: string;
    altText: string;
    variants: Array<{
        key: string;
        width: number;
        height: number;
        url: string;
    }>;
};

export type HardcodedProduct = {
    slug: string;
    name: string;
    path: string;
    summary: string;
    image: LocalImage;
    variants: ProductVariant[];
    sections: Array<{
        title: string;
        body: string;
        image?: LocalImage;
    }>;
    nutrition: {
        title: string;
        serving: string;
        items: Array<{
            key: string;
            value: string;
        }>;
    };
    relatedSlugs: string[];
};

const createImage = (
    key: string,
    image: { src: string; width: number; height: number },
    altText: string
): LocalImage => ({
    key,
    url: image.src,
    altText,
    variants: [
        {
            key: `${key}-default`,
            width: image.width,
            height: image.height,
            url: image.src,
        },
    ],
});

const createVariants = (
    slug: string,
    name: string,
    price: number,
    image: LocalImage
): ProductVariant[] => [
    {
        id: `${slug}-standard`,
        name: `${name} (Single)`,
        sku: `${slug.toUpperCase()}-SINGLE`,
        price,
        stock: 100,
        isDefault: true,
        attributes: [{ attribute: "Pack", value: "Single" }],
        images: [image],
        priceVariants: [
            {
                identifier: "default",
                name: "Default",
                price,
                currency: "USD",
            },
        ],
    } as ProductVariant,
    {
        id: `${slug}-box`,
        name: `${name} (Box of 6)`,
        sku: `${slug.toUpperCase()}-BOX6`,
        price: price * 6,
        stock: 100,
        isDefault: false,
        attributes: [{ attribute: "Pack", value: "Box of 6" }],
        images: [image],
        priceVariants: [
            {
                identifier: "default",
                name: "Default",
                price: price * 6,
                currency: "USD",
            },
        ],
    } as ProductVariant,
];

const chocolateDreamPrimaryImage = createImage(
    "chocolate-dream",
    chocolateDreamImage,
    "Chocolate Dream donut"
);
const creamyNonsensePrimaryImage = createImage(
    "creamy-nonsense",
    creamyNonsenseImage,
    "Creamy Nonsense donut"
);
const mixedDelightPrimaryImage = createImage(
    "mixed-delight",
    mixedDelightImage,
    "Mixed Delight donut"
);
const strawberryBlastPrimaryImage = createImage(
    "strawberry-blast",
    strawberryBlastImage,
    "Strawberry Blast donut"
);
const strawberryMassacrePrimaryImage = createImage(
    "strawberry-massacre",
    strawberryMassacreImage,
    "Strawberry Massacre donut"
);
const tripleTroublePrimaryImage = createImage(
    "triple-trouble-family-box",
    tripleTroubleImage,
    "Triple Trouble Family Box donuts"
);
const hardcodedFeatureImage = createImage(
    "bakery-counter",
    bakeryCounterImage,
    "Bakery counter with assorted donuts"
);

export const hardcodedProducts: HardcodedProduct[] = [
    {
        slug: "chocolate-dream",
        name: "Chocolate Dream",
        path: "/shop/chocolate-dream",
        summary:
            "What could be better than chocolate? This donut is a chocolate lover's dream.",
        image: chocolateDreamPrimaryImage,
        variants: createVariants(
            "chocolate-dream",
            "Chocolate Dream",
            8,
            chocolateDreamPrimaryImage
        ),
        sections: [
            {
                title: "Our Best-Selling Donut",
                body: "What could be better than chocolate? This donut is a chocolate lover's dream! Enjoy fresh or keep some perfectly frozen donuts on hand to satisfy your sweet tooth whenever you want.",
            },
            {
                title: "Frozen Donuts - For Best Results",
                body: "Store your frozen donuts in their packaging at 0 F / -17 C. Stored properly, they should keep for 2-3 months. To defrost, remove from packaging and transfer to a plate. Let thaw at room temperature for about an hour. To reheat the donuts, use a microwave (15-20 second bursts) or oven (350 F / 177 C for 5 minutes).",
                image: hardcodedFeatureImage,
            },
        ],
        nutrition: {
            title: "Nutrition",
            serving: "per 50 g",
            items: [],
        },
        relatedSlugs: ["strawberry-blast", "creamy-nonsense"],
    },
    {
        slug: "creamy-nonsense",
        name: "Creamy Nonsense",
        path: "/shop/creamy-nonsense",
        summary: "Creamy icing with chocolate drizzle.",
        image: creamyNonsensePrimaryImage,
        variants: createVariants(
            "creamy-nonsense",
            "Creamy Nonsense",
            8,
            creamyNonsensePrimaryImage
        ),
        sections: [
            {
                title: "Can't Decide? Go With This!",
                body: "Our Creamy Nonsense donut is dipped in vanilla cream and drizzled with chocolate ganache. Enjoy fresh or keep some perfectly frozen donuts on hand to satisfy your sweet tooth whenever you want.",
            },
            {
                title: "Frozen Donuts - For Best Results",
                body: "Store your frozen donuts in their packaging at 0 F / -17 C. Stored properly, they should keep for 2-3 months. To defrost, remove from packaging and transfer to a plate. Let thaw at room temperature for about an hour. To reheat the donuts, use a microwave (15-20 second bursts) or oven (350 F / 177 C for 5 minutes).",
                image: hardcodedFeatureImage,
            },
        ],
        nutrition: {
            title: "Nutrition",
            serving: "per 50 g",
            items: [],
        },
        relatedSlugs: ["strawberry-blast", "chocolate-dream"],
    },
    {
        slug: "mixed-delight",
        name: "Mixed Delight",
        path: "/shop/mixed-delight",
        summary: "What could be better than this? This donut is a donut lover's dream!",
        image: mixedDelightPrimaryImage,
        variants: createVariants(
            "mixed-delight",
            "Mixed Delight",
            2,
            mixedDelightPrimaryImage
        ),
        sections: [
            {
                title: "Try This Heavenly Goodness!",
                body: "Our Mixed Delight donut combines house favorites in one sweet bite. Enjoy fresh or keep some perfectly frozen donuts on hand to satisfy your sweet tooth whenever you want.",
            },
            {
                title: "Frozen Donuts - For Best Results",
                body: "Store your frozen donuts in their packaging at 0 F / -17 C. Stored properly, they should keep for 2-3 months. To defrost, remove from packaging and transfer to a plate. Let thaw at room temperature for about an hour. To reheat the donuts, use a microwave (15-20 second bursts) or oven (350 F / 177 C for 5 minutes).",
                image: hardcodedFeatureImage,
            },
        ],
        nutrition: {
            title: "Nutrition",
            serving: "per 50 g",
            items: [],
        },
        relatedSlugs: [
            "strawberry-massacre",
            "creamy-nonsense",
            "triple-trouble-family-box",
        ],
    },
    {
        slug: "strawberry-blast",
        name: "Strawberry Blast",
        path: "/shop/strawberry-blast",
        summary: "Limited edition glazed strawberry donut.",
        image: strawberryBlastPrimaryImage,
        variants: createVariants(
            "strawberry-blast",
            "Strawberry Blast",
            6,
            strawberryBlastPrimaryImage
        ),
        sections: [
            {
                title: "Limited Edition Glazed Favorite",
                body: "This strawberry glazed donut appears as a limited edition product on the storefront.",
            },
            {
                title: "Frozen Donuts - For Best Results",
                body: "Store your frozen donuts in their packaging at 0 F / -17 C. Stored properly, they should keep for 2-3 months. To defrost, remove from packaging and transfer to a plate. Let thaw at room temperature for about an hour. To reheat the donuts, use a microwave (15-20 second bursts) or oven (350 F / 177 C for 5 minutes).",
                image: hardcodedFeatureImage,
            },
        ],
        nutrition: {
            title: "Nutrition",
            serving: "per 50 g",
            items: [],
        },
        relatedSlugs: ["creamy-nonsense", "chocolate-dream"],
    },
    {
        slug: "strawberry-massacre",
        name: "Strawberry Massacre",
        path: "/shop/strawberry-massacre",
        summary:
            "Our Strawberry Massacre donut is dipped in strawberry icing and topped with festive rainbow sprinkles.",
        image: strawberryMassacrePrimaryImage,
        variants: createVariants(
            "strawberry-massacre",
            "Strawberry Massacre",
            1,
            strawberryMassacrePrimaryImage
        ),
        sections: [
            {
                title: "Try This Heavenly Goodness!",
                body: "Our Strawberry Massacre donut is dipped in strawberry icing and topped with festive rainbow sprinkles. Enjoy fresh or keep some perfectly frozen donuts on hand to satisfy your sweet tooth whenever you want.",
            },
            {
                title: "Frozen Donuts - For Best Results",
                body: "Store your frozen donuts in their packaging at 0 F / -17 C. Stored properly, they should keep for 2-3 months. To defrost, remove from packaging and transfer to a plate. Let thaw at room temperature for about an hour. To reheat the donuts, use a microwave (15-20 second bursts) or oven (350 F / 177 C for 5 minutes).",
                image: hardcodedFeatureImage,
            },
        ],
        nutrition: {
            title: "Nutrition",
            serving: "per 50 g",
            items: [],
        },
        relatedSlugs: ["strawberry-blast", "creamy-nonsense", "mixed-delight"],
    },
    {
        slug: "triple-trouble-family-box",
        name: "Triple Trouble Family Box",
        path: "/shop/triple-trouble-family-box",
        summary:
            "When it's too hard to choose, let us choose for you! An awesome bundle of donuts just for you!",
        image: tripleTroublePrimaryImage,
        variants: createVariants(
            "triple-trouble-family-box",
            "Triple Trouble Family Box",
            19,
            tripleTroublePrimaryImage
        ),
        sections: [
            {
                title: "The Family Box",
                body: "The bundle includes all our bestselling donuts. Enjoy fresh or keep some perfectly frozen donuts on hand to satisfy your sweet tooth whenever you want.",
            },
            {
                title: "Frozen Donuts - For Best Results",
                body: "Store your frozen donuts in their packaging at 0 F / -17 C. Stored properly, they should keep for 2-3 months. To defrost, remove from packaging and transfer to a plate. Let thaw at room temperature for about an hour. To reheat the donuts, use a microwave (15-20 second bursts) or oven (350 F / 177 C for 5 minutes).",
                image: hardcodedFeatureImage,
            },
        ],
        nutrition: {
            title: "Nutrition",
            serving: "per 50 g",
            items: [
                { key: "Calories", value: "143 kJ" },
                { key: "Total fat", value: "5.4 g" },
                { key: "Cholesterol", value: "0 mg" },
                { key: "Sodium", value: "85 mg" },
                { key: "Potassium", value: "393 mg" },
                { key: "Total carbohydrates", value: "22.8 mg" },
                { key: "Protein", value: "2.4 g" },
            ],
        },
        relatedSlugs: ["strawberry-blast", "creamy-nonsense", "chocolate-dream"],
    },
];

export const hardcodedProductsBySlug = hardcodedProducts.reduce<
    Record<string, HardcodedProduct>
>((acc, product) => {
    acc[product.slug] = product;
    return acc;
}, {});

export { hardcodedFeatureImage };
