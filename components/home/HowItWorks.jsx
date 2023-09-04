import React from "react";

const HowItWorks = () => {
  const buttons = [
    "Create Dataset",
    "Create Project",
    "Invite Team",
    "Choose Auto-labelling Model",
    "User Task UI",
    "Built-in Quality Workflow",
    "Export and Track Datasets",
    "Run Models",
    "Compare Model against Groundtruth",
    "Integrate with Business Workflow",
  ];
  return (
    <section className="bg-white py-20 px-4 sm:px-10">
      <div className="max-w-screen-lg mx-auto space-y-16">
        <h1 className="text-primary-900 font-semibold text-3xl text-center">
          How It Works
        </h1>
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm text-gray-500">
            <button type="button" className="py-3 px-4 border rounded">
              Create Dataset
            </button>
            <button type="button" className="py-3 px-4 border rounded">
              Create Project
            </button>
            <button type="button" className="py-3 px-4 border rounded">
              Invite Team
            </button>
            <button type="button" className="py-3 px-4 border rounded">
              Choose Pre-labelling Model
            </button>
            <button type="button" className="py-3 px-4 border rounded">
              Choose Auto-labelling Model
            </button>
            <button type="button" className="py-3 px-4 border rounded">
              User Task UI
            </button>
            <button type="button" className="py-3 px-4 border rounded">
              Built-in Quality Workflow
            </button>
            <button type="button" className="py-3 px-4 border rounded">
              Export and Track Datasets
            </button>
            <button type="button" className="py-3 px-4 border rounded">
              Run Models
            </button>
            <button type="button" className="py-3 px-4 border rounded">
              Compare Model against Groundtruth
            </button>
            <button type="button" className="py-3 px-4 border rounded">
              Integrate with Business Workflow
            </button>
          </div>
          <div className="bg-gray-200 h-96 w-full rounded"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
