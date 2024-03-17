import React from 'react';
import { useImmer } from 'use-immer';

function UserProfileWithImmer() {
  const [userProfile, setUserProfile] = useImmer({
    name: "",
    email: "",
    contactDetails: {
      phone: "",
      address: "",
    },
    preferences: {
      newsletter: false,
      notifications: false,
    },
  });

  const updateContactDetails = (phone, address) => {
    setUserProfile(draft => {
      draft.contactDetails.phone = phone;
      draft.contactDetails.address = address;
    });
  };

  const toggleNewsletterSubscription = () => {
    setUserProfile(draft => {
      draft.preferences.newsletter = !draft.preferences.newsletter;
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Phone"
        onChange={e => updateContactDetails(e.target.value, userProfile.contactDetails.address)}
      />
      <input
        type="text"
        placeholder="Address"
        onChange={e => updateContactDetails(userProfile.contactDetails.phone, e.target.value)}
      />
      <button onClick={toggleNewsletterSubscription}>Toggle Newsletter</button>
      <pre>{JSON.stringify(userProfile, null, 2)}</pre>
    </div>
  );
}

export default UserProfileWithImmer;
