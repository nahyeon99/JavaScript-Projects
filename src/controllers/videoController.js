let videos = [
  {
    title: "video #1",
    rating: 5,
    comments: 2,
    createdAt: "2 minute ago",
    views: 1,
    id: 1,
  },
  {
    title: "video #2",
    rating: 5,
    comments: 2,
    createdAt: "2 minute ago",
    views: 1,
    id: 2,
  },
  {
    title: "video #3",
    rating: 5,
    comments: 2,
    createdAt: "2 minute ago",
    views: 1,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];

  res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  console.log(title);
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "upload" });
};
export const postUpload = (req, res) => {
  const { title } = req.body;
  const newVideo = {
    title,
    rating: 0,
    comments: 0,
    createdAt: "2 minutes age",
    views: 0,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};
