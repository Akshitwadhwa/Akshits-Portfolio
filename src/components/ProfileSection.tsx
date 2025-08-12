import profileImage from '@/assets/akhit-profile.jpg';

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
        />
      </div>
    </div>
  );
};

export default ProfileSection;