import React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";

const UserAvatar = () => {
  return (
    <Link to={AppRoute.MY_LIST}>
      <div className="user-block__avatar">
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
      </div>
    </Link>
  );
};

export default UserAvatar;
