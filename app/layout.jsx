import React from "react";

const mainLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default mainLayout;
