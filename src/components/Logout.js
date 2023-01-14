import React from "react";
import { GoogleLogout } from "react-google-login";

const Logout = (clientId) => {
  const onSuccess = () => {};
  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};

export default Logout;
