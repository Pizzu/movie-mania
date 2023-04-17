import Image from "next/image";

export interface IAvatar {
  profileImg?: string;
}

const Avatar: React.FC<IAvatar> = ({ profileImg }) => {
  return (
    <div className="relative h-10 w-10">
      <Image
        className="rounded-full object-cover"
        src={profileImg ?? ""}
        alt="Profile image"
        fill
      />
    </div>
  );
};

export default Avatar;
