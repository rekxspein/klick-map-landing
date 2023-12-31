import NotFound from "@layouts/404";
import Base from "@layouts/Baseof";
import { getRegularPage } from "@lib/contentParser";

const notFound = ({ data }) => {
  return (
    <Base
      title={undefined}
      meta_title={undefined}
      description={undefined}
      image={undefined}
      noindex={undefined}
      canonical={undefined}
    >
      <NotFound data={data} />
    </Base>
  );
};

// get 404 page data
export const getStaticProps = async () => {
  const notFoundData = await getRegularPage(undefined);
  return {
    props: {
      data: notFoundData,
    },
  };
};

export default notFound;
