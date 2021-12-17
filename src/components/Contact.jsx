import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { init, sendForm } from 'emailjs-com';
init('user_1zMJY6Ot5ZQCHbu7AOGQR');

const Contact = () => {
  const [contactNumber, setContactNumber] = useState("000000");
  
  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  

  const message = watch('message') || "";

  // console.log(message)

  const onSubmit = (data, e) => {
    console.log(data)
    generateContactNumber();  
    sendForm('contact_form', 'template_6f31mbr', '#contact-form')
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      console.log('FAILED...', error);
    });
    e.target.reset();
  };

  return (
    <>
      <form className="contactform" id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
        <input type='hidden' name='contact_number' value={contactNumber} />
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                {...register("user_name", { required: true })}
                type="text"
                name="user_name"
                placeholder="YOUR NAME"
              />
              {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback">Name is required</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                {...register(
                  "user_email",
                  {
                    required: "Email is Required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  },
                  { required: true }
                )}
                type="email"
                name="user_email"
                placeholder="YOUR EMAIL"
              />
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                {...register("subject", { required: true })}
                type="text"
                name="phone"
                placeholder="Contact Phone Number"
              />
              {/* {errors.subject && (
                <span className="invalid-feedback">Message is required.</span>
              )} */}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-group">
              <textarea
                {...register("message", { required: true })}
                name="message"
                placeholder="YOUR MESSAGE"
              ></textarea>
              {errors.message && (
                <span className="invalid-feedback">Message is required.</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button type="submit" className="button">
              <span className="button-text">Send Message</span>
              <span className="button-icon fa fa-send"></span>
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>

      {/* End contact */}
    </>
  );
};

export default Contact;
