import React from "react";

export const ContactPicker = ({name, contacts, onChange}) => {
  return (
    <select name={name} onChange={onChange}>
      <option value="" key={-1} defaultValue="selected">
        - Select a Contact -
      </option>
      {contacts.map((contact) => {
        return (
          <option value={contact} key={contact}>{contact}</option>
        )
      })}
    </select>
  );
};
