import { FormattedMessage } from "react-intl";
import { LOCALES } from "../i18n/locales";

const Header = ({handleChange}) => {
  const menu = [
    {
      key: "about_project",
      title: "About the project",
      path: "#",
    },
    {
      key: "contact_us",
      title: "Contact us",
      path: "#",
    },
  ];

  const languages = [
    { name: "English", code: LOCALES.ENGLISH },
    { name: "日本語", code: LOCALES.JAPANESE },
    { name: "Français", code: LOCALES.FRENCH },
    { name: "Deutsche", code: LOCALES.GERMAN },
  ];

  const changeHandler = (e) => {
    handleChange(e.target.value);
  }

  return (
    <header>
      <div className="container header_content">
        <div className="brand">
        <FormattedMessage id="logo" />
        </div>
        <nav>
          <ul>
            {menu.map((data) => (
              <li key={data.title}>
                <a href={data.path}>
                  {/* {data.title} */}
                  <FormattedMessage id={data.key} />
                  </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="spacer"></div>
        <div className="switcher">
          {/* Language switch dropdown here */}
          Languages{" "}
          <select onChange={changeHandler} >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
