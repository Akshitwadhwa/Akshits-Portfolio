import profileImage from '@/assets/akshit-profile.png';

interface ProfileSectionProps {
  name: string;
}

const ProfileSection = ({ name }: ProfileSectionProps) => {
  return (
    <div className="animate-slide-in-left transform translate-x-8">
      <div className="profile-container">
        <div className="profile-border-outer" aria-hidden="true" />
        <div className="profile-border-inner" aria-hidden="true" />
        <img
          src={profileImage}
          alt={`${name} - Creative Developer and Filmmaker`}
          className="profile-image"
          style={{ transform: 'scale(1.8) translateX(0px) translateY(-60px)' }} // Scale up and move up to focus on face and upper body
        />
      </div>
    </div>
  );
};

export default ProfileSection;