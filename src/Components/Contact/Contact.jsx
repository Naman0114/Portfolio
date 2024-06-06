import './Contact.css';
const Contact=()=>{

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "a8476ad5-cb36-41bb-b640-0b920d46bc10");

        const object=Object.fromEntries(formData);
        const json=JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "content-Type":"application/json",
            Accept:"application/json"
          },
          body:json
        }).then((res)=>res.json());

        if (res.success) {
            console.log("success",res);
        }
      };
    


    return<>
    <div   className="contact">
        <div className="contact-in">
            <h1>Contact me</h1>
            <p>Please fill out the form below to contact me</p>
        </div>
        <div className="contact-msg">
            <div  className="contact-msg-heading">
                <h3>Send Your Message</h3>
            </div>
            <form onSubmit={onSubmit} className="contact-msg-info">
                <p>Full Name</p>
                <input  type='text'  name='name'placeholder='Enter your full name'/>
                <p>Email Address</p>
                <input  type='email'  name="email"placeholder='Enter your email'/>
                <p>Message</p>
                <textarea type="text" name='message'  rows="2" cols="20" placeholder='Type your message here'/><br/>
                <button type='submit'>Send</button>
            </form>
        </div>
    </div>
    <hr/>
    
    </>

}
export default Contact;