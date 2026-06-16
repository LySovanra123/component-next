import { LayoutProps } from "@/types/layoutProp"

function Layout({ header, children }: LayoutProps) {
    return (
        <>
            {header}
            <main>{children}</main>
        </>
    )

}

const Page = () => {
    return (
        <Layout header={<h1>Passing JSX as Props</h1>}>
            <p>You can pass elements instead of only strings or numbers.</p>
        </Layout>
    )
}
export default Page