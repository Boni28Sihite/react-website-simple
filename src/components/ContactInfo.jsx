import '../styles/ContactInfo.css'
import parse from 'html-react-parser'

function ContactInfo(props) {
    return (
        <div id="contact">
            <div className="wrapper">
                <div className="footer">

                    {
                        props.contactList.map((item, index) => {
                            return (
                                <div className="footer-section" key={index}>
                                    {parse(item.content)}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ContactInfo
