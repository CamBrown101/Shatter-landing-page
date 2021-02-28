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
        success: `Success! You've been added to the Shatter community`,
        error: 'An unexpected internal error has occurred.',
        empty: 'You must write an e-mail.',
        duplicate: 'Email already subscribed!',
        button: 'LEVEL UP!',
      }}
      className="mailchimp-form"
      styles={{
        sendingMsg: {
          color: 'black',
        },
        successMsg: {
          color: 'white',
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
