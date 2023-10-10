import { useEffect, useState } from "react";
import axios from "axios";

export const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };

  const inputProps = {
    type,
    value,
    onChange,
  };

  return {
    inputProps,
    reset,
  };
};

export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([]);

  const getAll = async () => {
    const res = await axios.get(baseUrl);
    setResources(res.data);
    return res.data;
  };

  const create = async (resource) => {
    console.log(resource);
    const res = await axios.post(baseUrl, resource);
    setResources([...resources, res.data]);
    return res.data;
  };

  const service = {
    create,
    getAll,
  };

  return [resources, service];
};
