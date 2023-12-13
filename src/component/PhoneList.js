import React, { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";
import { useSelector } from "react-redux/es/hooks/useSelector";

const PhoneList = () => {
  const {contactList, keyword} = useSelector((state) => state);
  let [filterList, setFilterList] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      let list = contactList.filter((i) => i.name.includes(keyword));
      setFilterList(list);
    } else {
      setFilterList(contactList);
    }
  }, [contactList, keyword]);

  return (
    <div className="phone-list">
      <div className="num">num: {filterList.length}</div>
      {filterList.map((item) => (
        <PhoneCard item={item}></PhoneCard>
      ))}
    </div>
  );
};

export default PhoneList;
