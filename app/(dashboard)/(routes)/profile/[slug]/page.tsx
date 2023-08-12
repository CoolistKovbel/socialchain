
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/router';




const ProfilePage = ({ params }: { params: { slug: string } }) => {

  
  const userData = {
    user_name: params.slug,
    user_image: "/bag-btc.png",
    user_description: "i matter but i dont matter",
    social_media: {
      x: 'http://twitter.com/lyub12',
      y: "http://youtube.com/lyub12",
      z: "http://pintrest.com/lyub12"
    },
  }


  return (
    <div>
      <h1>User Profile</h1>

      {/* Profile Card */}
      <div>

        {/* Profile image */}
        <p>Username: {params.slug}</p>

        {/* Profile image */}
        <div className='relative w-64 h-64 '> 
          <Image src={userData.user_image} alt="test" fill  />
        </div>

        {/* Social Menu */}
        <nav>
          <a href={userData.social_media.x}>👨🏽‍💻</a>
          <a href={userData.social_media.y}>👩🏽‍💻</a>
          <a href={userData.social_media.z}>🧑🏽‍💻</a>
        </nav>

        {/* Function Features */}
        <div>
          <Button>Recieve</Button>
          <Button>Send</Button>
          <Button>Poke</Button>
          <Button>Message</Button>
        </div>
        
      </div>

      {/* Profile Comments */}
      <div>
        <h3>Comments: </h3>
      </div>

    </div>
  );
};

export default ProfilePage;



