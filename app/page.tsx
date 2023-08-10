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

interface UserProfile {
  profile_image: string;
  profile_name: string;
  profile_description: string;
  social_media: {
    social_1: string,
    social_2: string,
    social_3: string,
  }
}

const user: UserProfile = {
  profile_image: "https://picsum.photos/200",
  profile_name: "John Doe",
  profile_description: "A brief description of John Doe.",
  social_media: {
    social_1: 'ww.3//twitter.clmo',
    social_2: 'ww.3//youtube.clmo',
    social_3: 'ww.3//t.clmo',
  } 
};



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

          {/* Div Content on the right */}
          <div>

            {/* 
              Basicaly the profile page i guess right?
              - image
              - name
              - description
              - social 
            */}
            
            <img src={user.profile_image} alt="profile" />

            <h2>{user.profile_name}</h2>
            <p>{user.profile_description}</p>

            <ul>
              <li>{user.social_media.social_1}</li>
              <li>{user.social_media.social_2}</li>
              <li>{user.social_media.social_3}</li>
            </ul>
            
          </div>


        </section>

      </main>
    )
}
