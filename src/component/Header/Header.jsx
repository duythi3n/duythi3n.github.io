import Headeritem from "./Headeritem";
import { headerData } from "../../data/Headerdata";

const Header = ({ className }) => {
  return (
    <>
      <div>
        {headerData.map((item) => {
          return (
            <Headeritem
              key={item.id}
              className={className}
              image={item.image}
              home={item.home}
              about={item.about}
              projects={item.projects}
              contact={item.contact}
            ></Headeritem>
          );
        })}
      </div>
    </>
  );
};

export default Header;
