import NavBar from "./NavBar";
import blog1 from "./assets/images/blog-1.jpg";
import blog2 from "./assets/images/blog-2.jpg";
import blog3 from "./assets/images/blog-3.jpg";
import blog4 from "./assets/images/blog-4.jpg";

const Blog = () => {
  return (
    <main className="w-full lg:w-[900px] bg-[#1e1e1f] text-white rounded-2xl h-auto flex flex-col border-[#383838] border-2">
      <div className="flex justify-between w-full items-end pl-8">
        <div className="text-3xl font-bold">Blog</div>

        <NavBar />
      </div>

      <div className="px-8">
        <div className="w-10 h-1 bg-[#ffdb70] mt-4" />

        {/* Blog container */}
        <div className="my-5 flex flex-wrap gap-3">
          {/* Blog box */}
          <div className="h-auto w-96">
            <img src={blog1} className="rounded-t-2xl" />
            {/* blog info box */}
            <div className="bg-[#2b2b2c] p-4">
              {/* Header */}
              <div className="flex gap-1 items-center mb-2 text-[#d6d6d6b3]">
                <p>Blog Category</p>
                <span>.</span>
                <p>Feb 24, 2024</p>
              </div>

              {/* Title */}
              <h1 className="text-2xl font-bold mb-2">Blog title</h1>
              <p className="text-[#d6d6d6]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores nobis enim ipsam rerum doloremque non ex hic eveniet, id
                recusandae atque adipisci, et voluptatibus accusantium voluptate
                provident architecto. Quae, aliquid.
              </p>
            </div>
          </div>
          {/* Blog box */}
          <div className="h-auto w-96">
            <img src={blog2} className="rounded-t-2xl" />
            {/* blog info box */}
            <div className="bg-[#2b2b2c] p-4">
              {/* Header */}
              <div className="flex gap-1 items-center mb-2 text-[#d6d6d6b3]">
                <p>Blog Category</p>
                <span>.</span>
                <p>Feb 24, 2024</p>
              </div>

              {/* Title */}
              <h1 className="text-2xl font-bold mb-2">Blog title</h1>
              <p className="text-[#d6d6d6]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores nobis enim ipsam rerum doloremque non ex hic eveniet, id
                recusandae atque adipisci, et voluptatibus accusantium voluptate
                provident architecto. Quae, aliquid.
              </p>
            </div>
          </div>
          {/* Blog box */}
          <div className="h-auto w-96">
            <img src={blog3} className="rounded-t-2xl" />
            {/* blog info box */}
            <div className="bg-[#2b2b2c] p-4">
              {/* Header */}
              <div className="flex gap-1 items-center mb-2 text-[#d6d6d6b3]">
                <p>Blog Category</p>
                <span>.</span>
                <p>Feb 24, 2024</p>
              </div>

              {/* Title */}
              <h1 className="text-2xl font-bold mb-2">Blog title</h1>
              <p className="text-[#d6d6d6]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores nobis enim ipsam rerum doloremque non ex hic eveniet, id
                recusandae atque adipisci, et voluptatibus accusantium voluptate
                provident architecto. Quae, aliquid.
              </p>
            </div>
          </div>
          {/* Blog box */}
          <div className="h-auto w-96">
            <img src={blog4} className="rounded-t-2xl" />
            {/* blog info box */}
            <div className="bg-[#2b2b2c] p-4">
              {/* Header */}
              <div className="flex gap-1 items-center mb-2 text-[#d6d6d6b3]">
                <p>Blog Category</p>
                <span>.</span>
                <p>Feb 24, 2024</p>
              </div>

              {/* Title */}
              <h1 className="text-2xl font-bold mb-2">Blog title</h1>
              <p className="text-[#d6d6d6]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores nobis enim ipsam rerum doloremque non ex hic eveniet, id
                recusandae atque adipisci, et voluptatibus accusantium voluptate
                provident architecto. Quae, aliquid.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
