import Title from "@/component/feature/title";
import React from "react";
const list_data = [{ personid: 1, name: "vc", city: "qn", Date: new Date() }];
export default function page() {
  return (
    <div>
      {list_data.map((item) => (
        <div key={item.personid}>
          <Title
            personid={item.personid}
            name={item.name}
            city={item.city}
            date={item.Date}
          />
        </div>
      ))}
    </div>
  );
}
