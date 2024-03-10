import MangaItem from "@/components/MangaItem";
import { Wrapper } from "@/components/Wrapper";
import { MANGA_CATEGORIES } from "../../config";
import Footer from "@/components/Footer";

type Param = string | string[] | undefined;

interface ProductsPageProps {
  searchParams: { [key: string]: Param };
}


const parse = (param: Param) => {
  return typeof param === "string" ? param : undefined;
};

const ProductsPage = ({ searchParams }: ProductsPageProps) => {
  const sort = parse(searchParams.sort);
  const category = parse(searchParams.category);


  return (
    <>
    <Wrapper>
        <h1 className="text-white px-2 py-3" >All Mangas</h1>
        <div className="grid gap-2 grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 px-2 ">

      <MangaItem
        query={{
          category,
          limit: 40,
          sort: sort === "desc" || sort === "asc" ? sort : undefined,
        }}
        classname="sm:w-[150px]  h-[220px] sm:h-[210px] lg:w-[170px] lg:h-[230px] md:w-[170px] md:h-[210px]"
      />
      </div>
    </Wrapper>
    <Footer />
    </>
  );
};

export default ProductsPage;
