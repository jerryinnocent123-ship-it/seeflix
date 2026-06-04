import "./styles/contactForm.css";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const { t } = useTranslation();

  return (
        <form>
          <h1 className="title">{t("contactTitle")}</h1>
          <div className="form-containers">
            <div className="form-coord">
              <div className="contact-direct">
                <h2>{t("contactMailLabel")}</h2>
                <p>jerryinnocent123@gmail.com</p>
              </div>
              <div className="contact-direct">
                <h2>{t("contactPhoneLabel")}</h2>
                <p>+509: 3112-1189</p>
              </div>
              <div className="contact-direct">
                <h2>{t("contactSiteLabel")}</h2>
                <p>Rue metelus, 23</p>
              </div>
            </div>

            <div className="form">
              <input type="text" name="name" placeholder={t("contactNamePlaceholder")} />
              <input type="email" name="mail" placeholder={t("contactEmailPlaceholder")} />
              <textarea
                name="message"
                placeholder={t("contactMessagePlaceholder")}
                rows="6"
              />

              <button className="btn-contact">{t("contactSendButton")}</button>
            </div>
          </div>
        </form>
    );
}

export default ContactForm;