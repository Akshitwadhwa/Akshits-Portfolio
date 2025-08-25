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
          style={{ transform: 'scale(1.2) translateX(0px)' }} // translateX: positive = right, negative = left
        />
      </div>
    </div>
  );
};

export default ProfileSection;