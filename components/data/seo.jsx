"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle + " - MIMO - Business Consulting Next js Template";
  }, []);
};

export default SEO;