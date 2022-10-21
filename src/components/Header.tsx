import logoImage from "../assets/logo.svg";

interface HeaderProps {
  scoreDisplay?: JSX.Element;
}

const Header = ({ scoreDisplay }: HeaderProps): JSX.Element => {
  return (
    <header className="flex justify-between items-center p-4 rounded-lg border-3 border-neutral-50/30">
      <img
        src={logoImage}
        alt="Rock, Paper, Scissors logo"
        width={162}
        height={99}
      />
      {scoreDisplay}
    </header>
  );
};

export default Header;
