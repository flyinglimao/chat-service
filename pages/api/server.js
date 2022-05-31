const axios = require("axios");

function getHandler(query, res) {
  axios
    .post(
      new URL("/v3/cluster/member/list", global.etcdConfig.client_url).href,
      { linearizable: true }
    )
    .then(({ data }) => {
      res.json(data);
    });
}

function postHandler(query, res) {
  axios
    .post(
      new URL("/v3/cluster/member/add", global.etcdConfig.client_url).href,
      { isLearner: false, peerURLs: [query.peer_url] }
    )
    .then(({ data }) => {
      res.json(data);
    });
}

function delHandler(query, res) {
  axios
    .post(
      new URL("/v3/cluster/member/remove", global.etcdConfig.client_url).href,
      { ID: query.peer_id }
    )
    .then(({ data }) => {
      res.json(data);
    });
}

export default function handler(req, res) {
  const { query, body, method } = req;

  switch (method) {
    case "GET":
      getHandler(query, res);
      break;
    case "POST":
      postHandler(body, res);
      break;
    case "DELETE":
      delHandler(body, res);
      break;
    default:
      res.status(405).end("Method not allowed");
  }
}
