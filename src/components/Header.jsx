function Header({ heading, subHeading }) {
  return (
    <div>
      <p className="  text-orange-400 text-2xl">{subHeading}</p>
      <p className="font-bold uppercase py-3 border-b-2 border-t-2 text-4xl">{heading}</p>
    </div>
  );
}

export default Header;
