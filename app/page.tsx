import Image from 'next/image'

export default function Home() {



  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">

        {/* 
          Header will have a seperate component
          there will be a login opition & register option
        */}
        <div>
          <nav>
            <a href="#">Login</a>
            <a href="#">Register</a>
          </nav>
        </div>

        {/* 
          There will be two sections divided within one another with a form content on the left and page data on the right
        */}

        <section>

          {/* Content on the left */}
          <div>

            {/* Content about searching and creating an account */}
            <div>
              <input type="text" />
              {/* logo / maginify glass */}
            </div>

          </div>


        </section>

      </main>
    )
}
