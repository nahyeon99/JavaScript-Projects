export const trending = (req, res) => res.send("Home");
export const search = (req, res) => res.send("search");

export const see = (req, res) => {
  return res.send(`Watch Videos #${req.params.id}`);
};
export const editVideo = (req, res) => {
  console.log(req.params);
  return res.send("editVideo");
};
export const deleteVideo = (req, res) => res.send("deleteVideo");
export const upload = (req, res) => res.send("upload");
