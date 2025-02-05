"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import ProductGrid from "@/components/products/ProductGrid";
import { useSession } from "next-auth/react";
import LoadingErrorComponent from "@/components/Loader/LoadingErrorComponent";

export default function SearchedProducts() {
  const { searchTerm } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const { data: session } = useSession();

  

  if(loading || error){
    return <LoadingErrorComponent loading={loading} error={error}/>
  }


  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-slate-700 mb-4 uppercase">
          Search Results for: {searchTerm}
        </h1>
        <p className="mb-6 text-slate-700">
          Total Products Found: {products.length}
        </p>
        <ProductGrid
          products={products}
          wishlist={wishlist}
          onWishlistUpdate={handleWishlistUpdate}
        />
      </main>
    </div>
  );
}
