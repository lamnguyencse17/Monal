import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App from "../components/App";

const serverRender = (req) => {
  return ReactDOMServer.renderToNodeStream(
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  );
};

export default serverRender;
