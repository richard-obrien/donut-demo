import { useState, useEffect } from "react";
import { VariantSelector } from "./variant-selector";
import { ProductCard } from "./product-card";
import {
    getCurrencySymbol,
    getDefaultPriceVariant,
    variantToCartItem,
} from "../use-cases/utils";
import type { HardcodedProduct } from "../use-cases/data/products";
import { hardcodedProductCards } from "../use-cases/data/product-cards";

export const Product = ({ product }: { product: HardcodedProduct }) => {
    const [selectedVariant, setSelectedVariant] = useState(
        product?.variants?.[0]
    );
    const onVariantChange = (variant: any) => setSelectedVariant(variant);
    const defaultPrice = getDefaultPriceVariant(selectedVariant?.priceVariants);
    const [cart, setCart] = useState<any>([]);
    const [buttonText, setButtonText] = useState("Add to Cart");

    const addToCart = (product: any) => {
        setButtonText("Adding...");
        const newCart = [...cart, variantToCartItem(product)];
        setCart(newCart);
        setButtonText("Added 🎉");
        setTimeout(() => setButtonText("Add to Cart"), 1000);
    };

    useEffect(() => {
        const cart = localStorage.getItem("cart");
        if (cart) {
            setCart(JSON.parse(cart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <>
            <div className="flex lg:flex-row gap-2 w-full items-center flex-col">
                <div className="flex flex-col text-text w-[400px]">
                    <h1 className="font-extrabold text-5xl mb-3">
                        {product.name}
                    </h1>
                    <p>{product.summary}</p>
                </div>
                <img
                    src={product.image.url}
                    alt={product.image.altText}
                    sizes="500px"
                    className="rounded-sm mx-auto max-w-full"
                />
            </div>
            <div className="flex lg:flex-row flex-col justify-center items-start gap-6 my-6">
                <div className="flex justify-between lg:w-7/12 w-full bg-white p-5 text-text rounded-xl items-center">
                    <div>
                    <VariantSelector
                            variants={product.variants!}
                            selectedVariant={selectedVariant!}
                            onVariantChange={onVariantChange}
                        />
                    </div>
                    <div>
                        <p className="font-semibold text-sm">Total price</p>
                        <p className="font-bold text-lg">
                            {getCurrencySymbol(
                                defaultPrice?.currency ?? "EUR",
                                defaultPrice?.price ?? 0.0
                            )}
                        </p>
                    </div>
                    <button
                        className="bg-background2 px-4 rounded-xl h-14"
                        onClick={() => addToCart(selectedVariant)}
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-3 my-10 lg:w-9/12 w-full mx-auto z-10">
                {product.sections.map((section) => (
                    <div key={section.title} className="my-3 text-text md:px-20">
                        <h2 className="font-semibold text-2xl mb-4">
                            {section.title}
                        </h2>
                        <p>{section.body}</p>
                        {section.image && (
                            <img
                                src={section.image.url}
                                alt={section.image.altText}
                                className="rounded-xl overflow-hidden mt-6 w-full"
                            />
                        )}
                    </div>
                ))}
                {product.nutrition.items.length > 0 && (
                    <div className="flex lg:flex-row flex-col justify-between text-text my-20">
                        <div>
                            <h3 className="font-bold text-2xl py-2">
                                {product.nutrition.title}
                            </h3>
                            <p className="italic">{product.nutrition.serving}</p>
                        </div>
                        <div className="lg:w-7/12 w-full">
                            {product.nutrition.items.map((property) => (
                                <div
                                    key={property.key}
                                    className="flex justify-between my-3 even:bg-grey px-5 py-2"
                                >
                                    <p>{property.key}</p>
                                    <p>{property.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <p className="text-text mb-4 font-semibold">Related do(u)nuts</p>
            <div className="flex w-full items-start flex-wrap gap-1">
                {product.relatedSlugs
                    .map((slug) =>
                        hardcodedProductCards.children.find(
                            (item) => item.id === slug
                        )
                    )
                    .filter(Boolean)
                    .map((relatedProduct) => (
                        <ProductCard
                            key={relatedProduct!.id}
                            product={relatedProduct!}
                        />
                    ))}
            </div>
        </>
    );
};
