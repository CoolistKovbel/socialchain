
import { useRouter } from 'next/router';




const ProfilePage = ({ params }: { params: { slug: string } }) => {

  console.log(params)
  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {params.slug}</p>
    </div>
  );
};

export default ProfilePage;

