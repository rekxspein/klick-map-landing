import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Base from "./Baseof";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PostSingle = ({ frontmatter, content, mdxContent, authors, slug }) => {
  // eslint-disable-next-line prefer-const
  let { description, title, image } = frontmatter;
  description = description ? description : content.slice(0, 120);

  return (
    <Base
      title={title}
      description={description}
      meta_title={undefined}
      noindex={undefined}
      canonical={undefined}
      image={undefined}
    >
      <section className="section">
        <div className="container">
          <div className="row">
            <article className="col-12 mx-auto text-center md:col-8">
              {image && (
                <Image
                  src={image}
                  height="500"
                  width="1000"
                  alt={title}
                  priority={true}
                  layout="responsive"
                  className="rounded-lg"
                />
              )}
              {markdownify(title, "h1", "h2 mb-6 mt-6 text-left")}

              <div className="content mb-16 text-left">
                <MDXRemote {...mdxContent} components={shortcodes} />
              </div>
            </article>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default PostSingle;