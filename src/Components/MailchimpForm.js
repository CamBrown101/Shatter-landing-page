import React from 'react';
import Mailchimp from 'react-mailchimp-form';
import './MailchimpForm.scss';

export const MailchimpForm = () => {
  return (
    <Mailchimp
      action="https://gmail.us7.list-manage.com/subscribe/post?u=5595f7c2f6c6cf0ae234d0d4f&amp;id=04a5456c18"
      fields={[
        {
          name: 'EMAIL',
          placeholder: 'Enter Your Email',
          type: 'email',
          required: true,
        },
      ]}
      messages={{
        sending: 'Sending...',
        success: 'Thank you for subscribing!',
        error: 'An unexpected internal error has occurred.',
        empty: 'You must write an e-mail.',
        duplicate: 'Too many subscribe attempts for this email address',
        button: 'Subscribe!',
      }}
      // Add a personalized class
      className="mailchimp-form"
      styles={{
        sendingMsg: {
          color: 'black',
        },
        successMsg: {
          color: '#212469',
        },
        duplicateMsg: {
          color: '#fcae18',
        },
        errorMsg: {
          color: '#ff2a6c',
        },
      }}
    />
  );
};

// action="https://gmail.us7.list-manage.com/subscribe/post?u=5595f7c2f6c6cf0ae234d0d4f&amp;id=04a5456c18" method="post" id="mc-embedded-subscribe-form"
