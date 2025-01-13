import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();  // Corrected by adding parentheses

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");  // Redirect to home after sign out
    }).catch((error) => {
      navigate("/error");  // Redirect to error page if sign out fails
    });
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      <div className="flex p-2">
        <img
          alt="usericon"
          src="/360_F_58787395_Rki4S1Q0wCgn5HeVbb9beMbyc8XCHrAZ.jpg"
          className="w-16 h-12 rounded-full"
        />
        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
      </div>
    </div>
  );
};

export default Header;
