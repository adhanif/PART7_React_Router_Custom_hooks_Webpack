import { useState, useEffect } from "react";
import axios from "axios";

import { getAll } from "../services/services";

export const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
};

export const useCountry = (name) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (name) {
      getAll(name)
        .then((res) => {
          setCountry(res);
        })
        .catch((err) => {
          setCountry("not found");
        });
    }
  }, [name]);

  return country;
};
