import { GiAncientSword } from "react-icons/gi";

interface LogoProps {
  onClick?: () => void;
}

const Logo = ({ onClick }: LogoProps) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-row gap-x-1 items-center justify-center cursor-pointer hover:opacity-50"
    >
      <GiAncientSword size={30} />
      <h1>RealmWise</h1>
    </div>
  );
};

export default Logo;
