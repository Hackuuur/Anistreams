'use client'
import React, { useEffect, useState } from "react";
import { Animeproduct } from "@/payload-types";
import { watchlist } from "@/hooks/use-watchlist";

const AddTowatchlist = ({ AnimeProduct }: { AnimeProduct: Animeproduct }) => {
  const { addItem } = watchlist();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [addedProducts, setAddedProducts] = useState<Animeproduct[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [isSuccess]);

  return (
    <>
    <button
      onClick={() => {
        addItem(AnimeProduct);
        setIsSuccess(true);
      }}>
        {isSuccess ? "Added!" : "Add To WatchList"}
      </button>
    </>
  );
};

export default AddTowatchlist;
