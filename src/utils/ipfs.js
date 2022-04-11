import * as ipfs from "ipfs";

function IPFS(data) {
  node = ipfs.create();

  const results = node.add(data);

  this.url = "";
}
