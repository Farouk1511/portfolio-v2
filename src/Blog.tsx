import InfoContainer from "./InfoContainer";
import blog1 from "./assets/images/blog-1.jpg";
import blog2 from "./assets/images/blog-2.jpg";
import blog3 from "./assets/images/blog-3.jpg";
import blog4 from "./assets/images/blog-4.jpg";

const Blog = () => {
  return (
    <InfoContainer name="Blog">
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              nobis enim ipsam rerum doloremque non ex hic eveniet, id
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              nobis enim ipsam rerum doloremque non ex hic eveniet, id
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              nobis enim ipsam rerum doloremque non ex hic eveniet, id
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              nobis enim ipsam rerum doloremque non ex hic eveniet, id
              recusandae atque adipisci, et voluptatibus accusantium voluptate
              provident architecto. Quae, aliquid.
            </p>
          </div>
        </div>
      </div>
    </InfoContainer>
  );
};

export default Blog;
