"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function SideBar() {

    const users = [ 
        {
            username: 'randomName',
            id: crypto.randomUUID()
        },
        {
            username: 'randomName2',
            id: crypto.randomUUID()
        }
    ]

    const [search, setSearch] = useState("")

    const handleSearch = (e: any) => {
        setSearch(e.target.value)
    }

     console.log(search)

    return  (
        <div id="Sidebar" className="flex items-center justify-center flex-col">
            <h2>SideBar</h2>
            <div>

               <div>
                  <form id="search-form" role="search">
                    <input
                        id="q"
                        aria-label="Search contacts"
                        placeholder="Search"
                        type="search"
                        name="q"
                        onChange={(e) => handleSearch(e)}
                    />

                   </form>
                   <form method="post">
                        <Button type="submit">New</Button>
                    </form>
                </div>

                <nav>
                    {
                        users.length ? (
                            <ul>
                                {users.map((user) => (
                                    <li key={user.id}>
                                        <Link href={`/profile/${user.username}`}>
                                            {user.username}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>
                                No contact
                            </p>
                        )
                    }
                </nav>
                
            </div>
        </div>
    )
}

