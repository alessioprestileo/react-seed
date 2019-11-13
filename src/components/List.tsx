import React from 'react';

export const List = (props : any) => {
  const { label, value } = props;
  return (
    <div className="detailContentWrapper">
      <div className="detailcontentLabel">{label}</div>
      <div className="detailcontent">{value}</div>
    </div>
  );
};
