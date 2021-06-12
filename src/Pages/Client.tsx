import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { user } from "../Modules/auth"

export default function Client() {
  const history = useHistory();

  useEffect(() => {
    if (!user.is) {
       history.push("/login");
    }
  }, []);

  return(
    <div>

    </div>
  )
}
