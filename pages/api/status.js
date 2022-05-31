const { execSync } = require("child_process");

export default function handler(req, res) {
  if (!global.etcdConfig || !global.etcdConfig.client_url) return res.json({error: 'Not up'})
  try {
    res.json(
      JSON.parse(
        execSync(
          `etcdctl member list --write-out=json --endpoints ${global.etcdConfig.client_url}`
        ).toString()
      )
    );
  } catch (e) {
    res.json(
      { error: e.message}
    );
  }
}
