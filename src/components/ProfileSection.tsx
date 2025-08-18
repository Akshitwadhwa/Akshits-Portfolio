import profileImage from '@/assets/akshit-profile.jpg';

interface ProfileSectionProps {
  name: string;
}

const ProfileSection = ({ name }: ProfileSectionProps) => {
  return (
    <div className="animate-slide-in-left">
      <div className="profile-container">
        <div className="profile-border-outer" aria-hidden="true" />
        <div className="profile-border-inner" aria-hidden="true" />
        <img 
          src={profileImage}
          alt={`${name} - Creative Developer and Filmmaker`}
          className="profile-image"
          style={{ transform: 'scale(1.0)' }} // Change this value: 0.8 = smaller, 1.2 = larger
        />
      </div>
    </div>
  );
};

export default ProfileSection;