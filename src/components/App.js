import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { IntlProvider } from "react-intl";
import { messages } from "../i18n/messages";
import { LOCALES } from "../i18n/locales";
import { useState } from "react";

const App = () => {
  // console.log(IntlProvider);

  const locale = LOCALES.ENGLISH;

  const [currentLocale, setCurrentLocale] = useState(locale);


  const handleChange = (value) => {
    console.log(value);
    setCurrentLocale(value);
  };

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={currentLocale}
    >
      <Header handleChange={handleChange}/>
      <Content />
      <Footer />
    </IntlProvider>
  );
};

export default App;
