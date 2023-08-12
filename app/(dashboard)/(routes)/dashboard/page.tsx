import Link from "next/link"

const DashboardPage = () => {

    const username = "anonymous"

    return (
        <main id="DasboardPage">
            <h2>main content</h2>
            <Link href={`/profile/${username}`}>PROFILE</Link>
        </main>
    )
}

export default DashboardPage