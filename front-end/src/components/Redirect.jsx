import React from "react";
import { useNavigate } from "react-router-dom";

function Redirect({ to }) {
    const navigate = useNavigate();
    navigate(to);
    return null;
    }
export { Redirect }