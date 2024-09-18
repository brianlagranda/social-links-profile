import avatarURL from "../assets/avatar-brian.png";

type socialLinksType = {
  name: string;
  url: string;
};

type profileType = {
  userId: number;
  name: string;
  location: string;
  description: string;
  socialLinks: socialLinksType[];
};

interface ProfileProps {
  profile: profileType;
}

const SocialLinksProfile: React.FC<ProfileProps> = ({ profile }) => {
  return (
    <aside className="flex h-full w-full select-none flex-col items-center justify-center gap-4 rounded-xl bg-bgSecondary p-4 text-center font-inter xs:p-6 sm:p-10">
      <div className="flex flex-col items-center gap-6">
        <img src={avatarURL} className="h-[5.5rem] w-[5.5rem] rounded-full" />
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-tPrimary">{profile.name}</h2>
          <h4 className="text-sm font-medium tracking-tight text-tSecondary">
            {profile.location}
          </h4>
        </div>
        <p className="mb-2 text-sm font-extralight text-tPrimary">
          {profile.description}
        </p>
      </div>
      {profile.socialLinks.map((socialLink, index) => (
        <div
          key={index}
          className="h-[2.8rem] w-64 content-center rounded-md bg-bgButton text-sm font-semibold text-tPrimary hover:cursor-pointer hover:bg-tSecondary hover:text-bgSecondary xs:w-72 sm:w-[19rem]"
        >
          <a
            href={socialLink.url}
            className="block h-full w-full content-center"
          >
            {socialLink.name}
          </a>
        </div>
      ))}
    </aside>
  );
};

export default SocialLinksProfile;
