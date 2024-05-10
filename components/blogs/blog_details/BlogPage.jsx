import PageBuilder from "@/components/PageBuilder";
import Image from "next/image";
import React from "react";

const BlogPage = ({ blogData }) => {
	console.log("blogData", blogData);
	return <PageBuilder data={blogData} />;
};

export default BlogPage;
