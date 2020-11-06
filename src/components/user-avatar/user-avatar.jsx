import React from "react";
import {Link} from "react-router-dom";

const UserAvatar = () => {
  return (
    <Link to="/mylist">
      <div className="user-block__avatar">
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
      </div>
    </Link>
  );
};

export default UserAvatar;
