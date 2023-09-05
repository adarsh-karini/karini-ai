import React from "react";

const Stats = () => {
  return (
    <section class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 space-y-4">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-xl font-semibold text-primary-900 sm:text-2xl">
            Our mission is to help you grow your business
          </h2>
        </div>

        <div class="">
          <dl class="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:divide-x sm:divide-gray-100">
            <div class="flex flex-col px-4 py-8 text-center">
              <dt class="order-last text-base font-medium text-gray-500">
                Capital raised
              </dt>

              <dd class="text-2xl font-extrabold text-gray-800 md:text-3xl lg:text-4xl">
                $100M
              </dd>
            </div>

            <div class="flex flex-col px-4 py-8 text-center">
              <dt class="order-last text-base font-medium text-gray-500">
                Upto Saving rates
              </dt>

              <dd class="text-2xl font-extrabold text-gray-800 md:text-3xl lg:text-4xl">
                30%
              </dd>
            </div>

            <div class="flex flex-col px-4 py-8 text-center">
              <dt class="order-last text-base font-medium text-gray-500">
                Team Members
              </dt>

              <dd class="text-2xl font-extrabold text-gray-800 md:text-3xl lg:text-4xl">
                60+
              </dd>
            </div>
            <div class="flex flex-col px-4 py-8 text-center">
              <dt class="order-last text-base font-medium text-gray-500">
                Global users
              </dt>

              <dd class="text-2xl font-extrabold text-gray-800 md:text-3xl lg:text-4xl">
                50M+
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Stats;
