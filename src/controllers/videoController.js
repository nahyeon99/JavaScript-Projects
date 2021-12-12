export const trending = (req, res) => {
  const videos = [
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
  return res.render("home", { pageTitle: "Home", videos });
};

export const see = (req, res) => {
  res.render("watch", { pageTitle: "Watch" });
};

export const search = (req, res) => res.send("search");

export const editVideo = (req, res) => {
  res.render("edit", { pageTitle: "edit videos" });
};
export const deleteVideo = (req, res) => res.send("deleteVideo");
export const upload = (req, res) => res.send("upload");
