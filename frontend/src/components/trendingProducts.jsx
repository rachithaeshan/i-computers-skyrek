import ProductCard from "./productCard";

export default function TrendingProducts() {
    return (
        <div>
            <h1>Trending Products</h1>
            <ProductCard name="Mac book air" price="15,000" image="https://picsum.photos/id/1/200/300" ></ProductCard>

            <ProductCard name="Apple iphone" price="10,000" image="https://picsum.photos/id/2/200/300" ></ProductCard>

            <ProductCard name="Samsung Galaxy" price="8,000" image="https://picsum.photos/id/3/200/300" ></ProductCard>

            <ProductCard name="Sony Headphones" price="5,000" image="https://picsum.photos/id/4/200/300" ></ProductCard>
        </div>
    )
}