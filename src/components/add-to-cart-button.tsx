import { useState } from "react";

type AddToCartButtonProps = {
    sku: string;
    name: string;
    price: number;
    image: string;
};

type LocalCartItem = {
    sku: string;
    name: string;
    quantity: number;
    price: number;
    image: string;
    attributes: { attribute: string; value: string }[];
};

export const AddToCartButton = ({
    sku,
    name,
    price,
    image,
}: AddToCartButtonProps) => {
    const [buttonText, setButtonText] = useState("Add to Cart");

    const addToCart = () => {
        const cart: LocalCartItem[] = JSON.parse(
            localStorage.getItem("cart") ?? "[]"
        );
        const existingItem = cart.find((item) => item.sku === sku);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                sku,
                name,
                quantity: 1,
                price,
                image,
                attributes: [],
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        setButtonText("Added 🎉");
        setTimeout(() => setButtonText("Add to Cart"), 1000);
    };

    return (
        <button className="bg-background2 px-4 rounded-xl" onClick={addToCart}>
            {buttonText}
        </button>
    );
};
