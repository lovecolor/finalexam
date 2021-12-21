export const createAppApiClient = (api) => {
  return {
    login: login(api),
    getBlogs: getBlogs(api),
    postNewBlog: postNewBlog(api),
  };
};

const login = (api) => async (data) => {
  try {
    const res = await api.post("/user/login", data);

    return res.data;
  } catch (error) {}
};
const getBlogs = (api) => async () => {
  try {
    const res = await api.get("/blogs");

    return res.data;
  } catch (error) {}
};
const postNewBlog = (api) => async (data) => {
  try {
    const res = await api.post("/blogs", data);

    return res.data;
  } catch (error) {}
};
