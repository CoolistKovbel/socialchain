"use client"

import { Button } from "@/components/ui/button";

export default function SideBar() {
    return  (
        <div id="Sidebar">
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
                    />

                   </form>
                   <form method="post">
                    <Button type="submit">New</Button>
                    </form>
                </div>
                <nav>
                    <ul>
                        <li>
                        <a href={`/contacts/1`}>Your Name</a>
                        </li>
                        <li>
                        <a href={`/contacts/2`}>Your Friend</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

