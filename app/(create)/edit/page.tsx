import { getOne } from "@/app/api/blog/route";
import style from "./page.module.css";

type Blog = {
  _id: string;
  image: string;
  title: string;
  tag: string;
  description: string;
  largeDescription: string;
};

export default async function Edit(id: string) {
  const blogById = await getOne({ params: { id } });

  return (
    <>
      {blogById?.map((blog: Blog) => (
        <div className={style.container}>
          <form>
            <h3 className={style.title}>Edit Blog Post</h3>
            <div className={style.centered}>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter Title"
                className={`${style.input} ${style.inputTitle}`}
                value={blog.title}
              />
            </div>
            <div className={style.centered}>
              <div className={style.select}>
                <select name="tag" id="tag" className={style.input}>
                  <option value="tag">Select tag</option>
                  <option value="health">Health</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="exotic">Exotic</option>
                  <option value="educational">Educational</option>
                </select>
                <select name="author" id="author" className={style.input}>
                  <option value="author">Select author</option>
                  <option value="Ruby">Ruby Johnson</option>
                  <option value="Emily">Emily Smith</option>
                  <option value="John">John Anderson</option>
                  <option value="Robert">Robert Williams</option>
                </select>
                <div>
                  <textarea
                    name="description"
                    id="description"
                    placeholder="Small description about post..."
                    className={style.input}
                    rows={6}
                    cols={30}
                    value={blog.description}
                  ></textarea>
                </div>
              </div>
              <div className={style.imagePlace}>
                <img src="https://picsum.photos/300/300" alt="" />
              </div>
            </div>

            <div className={style.centered}>
              <textarea
                name="text"
                id="text"
                placeholder="Enter your text here..."
                className={style.input}
                rows={20}
                cols={80}
                value={blog.largeDescription}
              ></textarea>
            </div>

            <div className={style.centered}>
              <button type="submit">Edit Post</button>
            </div>
          </form>
        </div>
      ))}
    </>
  );
}
