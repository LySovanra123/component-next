function Card({
    children,
}: { children: React.ReactNode }) {
    return (
        <div className="border p-4 rounded">
            {children}
        </div>
    )
}

const Page = () =>{
    return(
        <Card>
            <h2>Product</h2>
            <p>MacBook Pro</p>
            <button>Buy Now</button>
        </Card>
    )
}

export default Page