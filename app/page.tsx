import Image from 'next/image'

// Array of adjectives and nouns to create random usernames
const adjectives: string[] = ['happy', 'funny', 'silly', 'clever', 'bright', 'vibrant', 'awesome', 'brave', 'kind', 'gentle'];
const nouns: string[] = ['unicorn', 'panda', 'star', 'wizard', 'rocket', 'cookie', 'dolphin', 'tiger', 'flower', 'rainbow'];


// Function to generate a random username
function generateUsername(): string {
  const randomAdjective: string = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun: string = nouns[Math.floor(Math.random() * nouns.length)];
  
  const username: string = `${randomAdjective}_${randomNoun}`;
  return username;
}

export default function Home() {

  // List of accounts
  const accounts = [
    {
      username: generateUsername(),
      profile_image: "https://picsum.photos/200"
    },
    {
      username: generateUsername(),
      profile_image: "https://picsum.photos/200"
    },
    {
      username: generateUsername(),
      profile_image: "https://picsum.photos/200"
    },
  ]
  


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

            {/* List of accounts */}
            {
              accounts ? (
                <div>
                  {
                    accounts.map((account) => (
                      <div key={crypto.randomUUID()}>
                        <img src={account.profile_image} alt="profile icon" />
                        <h3>{account.username}</h3>
                      </div>
                    ))
                  }
                </div>
              ) : "no"
            }

          </div>


        </section>

      </main>
    )
}
