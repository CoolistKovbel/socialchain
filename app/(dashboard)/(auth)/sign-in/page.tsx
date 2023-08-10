
const SignInPage = () => {
    return (
        <div>
            <h2>Welcome back</h2>
            <h3>Sign In</h3>
            <form>
                <label htmlFor="email">
                    <span>email: </span>
                    <input type="email" placeholder="Enter Email" id="email" />
                    <p>remeber username</p>
                </label>
                <label htmlFor="password">
                    <span>password: </span>
                    <input type="password" placeholder="password" id="password" />
                </label>
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default SignInPage