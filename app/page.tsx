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

  // List of messages
  const messages = [
    {
      message: "Wow very cool you wanna code?",
      user: accounts[0].username,
      userImage: accounts[0].profile_image
    },
    {
      message: "Wow very cool you wanna code?",
      user: accounts[1].username,
      userImage: accounts[1].profile_image
    },
    {
      message: "Wow very cool you wanna code?",
      user: accounts[2].username,
      userImage: accounts[2].profile_image
    }
  ]
  


  return (
      <main className="md:container md:mx-auto">

        {/* 
          Header will have a seperate component
          there will be a login opition & register option
        */}
        <div className='w-full flex flex-row-reverse bg-teal-950 text-white text-right p-12'>
          <nav className='w-28 flex justify-between'>
            <a href="#">Login</a>
            <a href="#">Register</a>
          </nav>
        </div>

        {/* 
          There will be two sections divided within one another with a form content on the left and page data on the right
        */}

        <section className='w-full flex bg-stone-700 text-white'>

          {/* Content on the left */}
          <aside className='w-1/4 bg-gray-800 align-middle justify-center p-3.5'>

            {/* Content about searching and creating an account */}
            <form className='w-full h-14'>
              <input type="text" className=' w-full text-black' />
              {/* logo / maginify glass */}
            </form>

            {/* List of accounts */}
            {
              accounts ? (
                <nav className='bg-orange-950 p-5'>
                  {
                    accounts.map((account) => (
                      <div key={crypto.randomUUID()} className='w-full flex items-center mb-2.5'>
                        <img src={account.profile_image} alt="profile icon" className='w-14 h-14 mr-5' />
                        <h3>{account.username}</h3>
                      </div>
                    ))
                  }
                </nav>
              ) : "no"
            }

          </aside>

          {/* Div Content on the right */}
          <div className='w-3/4'>

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

            <div>
              <a href="#">Recive</a>
              <a href="#">Send</a>
              <a href="#">Poke</a>
              <a href="#">message</a>
            </div>

            {/* Messages left from other users */}
            <div>
              {
                messages.map((message) => (
                  <div>
                    <div>
                      <img src={message.userImage} alt="user" />
                      <p>{message.user}</p>
                    </div>
                      <p>{message.message}</p>
                  </div>
                ))
              }
            </div>
            
          </div>


        </section>

      </main>
    )
}
