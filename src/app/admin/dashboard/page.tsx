"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Package, ExternalLink, Loader2, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

interface ProductImage {
    url: string;
    imageKey: string;
}

interface Product {
    _id: string;
    productName: string;
    slug: string;
    images: ProductImage[];
}

export default function AdminDashboardPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const res = await fetch("/api/product", { cache: "no-store" });
                const data = await res.json();
                if (data.success) {
                    setProducts(data.products || []);
                }
            } catch (error) {
                console.error("Fetch products error:", error);
                toast.error("Failed to fetch products");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="space-y-8 max-w-6xl mx-auto">
            {/* HEADER */}
            <div>
                <h1 className="text-3xl font-black tracking-tight text-slate-900 uppercase">
                    ADMIN OVERVIEW
                </h1>
                <p className="text-slate-500 text-sm mt-1">
                    Welcome back! Here is a summary of your website metrics.
                </p>
            </div>

            {/* METRICS CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-white border-2 border-slate-900 rounded-3xl p-6 flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                    <div className="space-y-1">
                        <p className="text-xs font-black text-slate-400 tracking-wider uppercase">
                            TOTAL PRODUCTS
                        </p>
                        <h3 className="text-3xl font-black text-slate-900">
                            {loading ? (
                                <Loader2 className="animate-spin text-indigo-600" size={24} />
                            ) : (
                                products.length
                            )}
                        </h3>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-200">
                        <Package size={28} />
                    </div>
                </div>

                <Link
                    href="/admin/products"
                    className="bg-white border-2 border-slate-900 rounded-3xl p-6 flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:bg-indigo-50/50 transition group"
                >
                    <div className="space-y-1">
                        <p className="text-xs font-black text-indigo-600 tracking-wider uppercase">
                            MANAGE CATALOG
                        </p>
                        <h3 className="text-lg font-black text-slate-900 group-hover:text-indigo-600 transition flex items-center gap-2">
                            All Products List
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
                        </h3>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white flex items-center justify-center shadow-md">
                        <ExternalLink size={24} />
                    </div>
                </Link>
            </div>

            {/* RECENT PRODUCTS */}
            <div className="bg-white border-2 border-slate-900 rounded-3xl p-6 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <h2 className="text-base font-black text-slate-900 uppercase">
                        Recent Products
                    </h2>
                    <Link
                        href="/admin/products"
                        className="text-xs font-bold text-indigo-600 hover:underline"
                    >
                        View All →
                    </Link>
                </div>

                {loading ? (
                    <div className="p-8 text-center text-slate-400 flex items-center justify-center gap-2">
                        <Loader2 className="animate-spin" size={20} />
                        Loading products...
                    </div>
                ) : products.length === 0 ? (
                    <div className="p-8 text-center text-slate-500 space-y-3">
                        <Package className="mx-auto text-slate-300" size={36} />
                        <p className="text-sm font-medium">No products found in catalog</p>
                    </div>
                ) : (
                    <div className="divide-y divide-slate-100">
                        {products.slice(0, 5).map((prod) => (
                            <div
                                key={prod._id}
                                className="py-3 flex items-center justify-between hover:bg-slate-50 px-2 rounded-xl transition"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0 border border-slate-200">
                                        {prod.images?.[0]?.url ? (
                                            <img
                                                src={prod.images[0].url}
                                                alt={prod.productName}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-slate-400">
                                                <Package size={16} />
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">
                                            {prod.productName}
                                        </h4>
                                        <p className="text-xs text-slate-400">slug: {prod.slug}</p>
                                    </div>
                                </div>
                                <Link
                                    href={`/admin/products/${prod.slug}`}
                                    className="text-xs font-bold text-slate-700 hover:text-indigo-600 border border-slate-300 hover:border-indigo-500 px-3 py-1 rounded-lg transition"
                                >
                                    Edit
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
