import type { ProductCard } from "../contracts/ProductCard";

import chocolateDreamImage from "../../assets/products/chocolate-dream.png";
import creamyNonsenseImage from "../../assets/products/creamy-nonsense.png";
import mixedDelightImage from "../../assets/products/mixed-delight.png";
import strawberryBlastImage from "../../assets/products/strawberry-blast.png";
import strawberryMassacreImage from "../../assets/products/strawberry-massacre.png";
import tripleTroubleImage from "../../assets/products/triple-trouble-family-box.png";

type ProductCardEntry = ProductCard["product"];

const createImage = (
    key: string,
    image: { src: string; width: number; height: number },
    altText: string
) => ({
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

export const hardcodedProductCards: { children: ProductCardEntry[] } = {
    children: [
        {
            id: "chocolate-dream",
            name: "Chocolate Dream",
            path: "/shop/chocolate-dream",
            topics: [{ name: "New" }],
            bundle: { content: { value: false } },
            defaultVariant: {
                firstImage: createImage(
                    "chocolate-dream",
                    chocolateDreamImage,
                    "Chocolate Dream donut"
                ),
                priceVariant: {
                    price: 8,
                    currency: "USD",
                },
            },
        },
        {
            id: "creamy-nonsense",
            name: "Creamy Nonsense",
            path: "/shop/creamy-nonsense",
            topics: [{ name: "Best seller" }],
            bundle: { content: { value: false } },
            defaultVariant: {
                firstImage: createImage(
                    "creamy-nonsense",
                    creamyNonsenseImage,
                    "Creamy Nonsense donut"
                ),
                priceVariant: {
                    price: 7,
                    currency: "USD",
                },
            },
        },
        {
            id: "mixed-delight",
            name: "Mixed Delight",
            path: "/shop/mixed-delight",
            topics: [{ name: "Featured" }],
            bundle: { content: { value: false } },
            defaultVariant: {
                firstImage: createImage(
                    "mixed-delight",
                    mixedDelightImage,
                    "Mixed Delight donut"
                ),
                priceVariant: {
                    price: 10,
                    currency: "USD",
                },
            },
        },
        {
            id: "strawberry-blast",
            name: "Strawberry Blast",
            path: "/shop/strawberry-blast",
            topics: [{ name: "Classic" }],
            bundle: { content: { value: false } },
            defaultVariant: {
                firstImage: createImage(
                    "strawberry-blast",
                    strawberryBlastImage,
                    "Strawberry Blast donut"
                ),
                priceVariant: {
                    price: 5,
                    currency: "USD",
                },
            },
        },
        {
            id: "strawberry-massacre",
            name: "Strawberry Massacre",
            path: "/shop/strawberry-massacre",
            topics: [{ name: "Editor's pick" }],
            bundle: { content: { value: false } },
            defaultVariant: {
                firstImage: createImage(
                    "strawberry-massacre",
                    strawberryMassacreImage,
                    "Strawberry Massacre donut"
                ),
                priceVariant: {
                    price: 11,
                    currency: "USD",
                },
            },
        },
        {
            id: "triple-trouble-family-box",
            name: "Triple Trouble Family Box",
            path: "/shop/triple-trouble-family-box",
            topics: [{ name: "Family box" }],
            bundle: { content: { value: false } },
            defaultVariant: {
                firstImage: createImage(
                    "triple-trouble-family-box",
                    tripleTroubleImage,
                    "Triple Trouble Family Box donuts"
                ),
                priceVariant: {
                    price: 30,
                    currency: "USD",
                },
            },
        },
    ],
};
