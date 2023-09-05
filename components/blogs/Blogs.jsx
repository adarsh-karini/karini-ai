import React from "react";

const Blogs = () => {
  const blogData = [
    {
      image: "",
      title: "Highnote Emerges from Stealth with $54 Million in Funding",
      description:
        "Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.",
      tag: "analytics",
      dateandDuration: "Oct 3 - 7 min read",
    },
    {
      image: "",
      title: "Custom Reports Can Go A Long Way For Your Business",
      description:
        "Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.",
      tag: "analytics",
      dateandDuration: "Oct 3 - 7 min read",
    },
    {
      image: "",
      title: "Highnote Emerges from Stealth with $54 Million in Funding",
      description:
        "Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.",
      tag: "analytics",
      dateandDuration: "Oct 3 - 7 min read",
    },
  ];
  return (
    <section className="bg-white px-4 sm:px-10 pt-0 sm:pt-10 pb-20">
      <div class="mx-auto max-w-screen-lg space-y-8">
        <h2 class="text-2xl font-semibold text-primary-900 sm:text-3xl">
          Blogs & Updates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {blogData.map((blog, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-lg border-2 border-gray-100 bg-white shadow-sm"
            >
              <img
                alt="Office"
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-56 w-full object-cover"
              />

              <div className="p-4 sm:p-6">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-900 hover:text-primary-600">
                    {blog.title}
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  {blog.description}
                </p>

                <a
                  href="#"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600"
                >
                  Find out more
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
