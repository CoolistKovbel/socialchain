// @components/navBar.tsx

export default function NavBar(){
    return (
        <nav className='w-28 flex justify-between'>
            <a href="/sign-in">Login</a>
            <a href="/register">Register</a>
        </nav>
    )
}