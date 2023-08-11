import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignInPage() {
    return (
        <main>

            {/* Register Component */}
            <div>
                <h2>Register</h2>

                {/* Widget */}
                <div>
                    <div>
                        <Button>Sign in With Metamask</Button>
                    </div>

                    <br />
                    {/* Regular Way */}
                    
                    <form>
                        <label htmlFor="username">
                            <span>Username: </span>
                            <input type="text" placeholder="username" name="username" id="username" />
                        </label>
                        <label htmlFor="password">
                            <span>Password: </span>
                            <input type="password" name="password" id="password" />
                        </label>
                        <Button>Enter</Button>
                    </form>
                </div>

                <p>Are you Looking to Login?  Go <Link href="/login">here</Link></p>

            </div>

        </main>
    )
}