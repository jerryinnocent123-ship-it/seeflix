import "./styles/contactForm.css"


function ContactForm() {

    return (
        <form >
            <h1 className="title">
                    Contacter nous
                </h1>
            <div className="form-containers">
                
                <div className="form-coord">

                    <div className="contact-direct">
                        <h2>Mail</h2>
                        <p>jerryinnocent123@gmail.com</p>
                    </div>
                    <div className="contact-direct">
                        <h2>Phone</h2>
                        <p>+509: 3112-1189</p>
                    </div>
                    <div className="contact-direct">
                        <h2>Site</h2>
                        <p>Rue metelus, 23</p>
                    </div>
                </div>

                <div className="form">
                    <input type="text" name="name" placeholder="Enteryour name" />
                    <input type="email" name="mail" placeholder="Enter Adresse mail" />
                    <textarea
                        name="message"
                        placeholder="Comment pouvons-nous vous aider ?"
                        rows="6" />

                        <button className="btn-contact">Send</button>
                </div>
            </div>


        </form>
    );
}

export default ContactForm;