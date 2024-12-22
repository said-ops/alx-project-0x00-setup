import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";


const Landing: React.FC = () => {
  return (
    <div>
      <div>
      <h1>Welcome to the Landing Page</h1>
      <div className="flex flex-col gap-4 mt-4 mx-10">
        {/* Small Buttons */}
        <Button title="Small Rounded-sm" styles="text-sm rounded-sm bg-blue-500 text-white" />
        <Button title="Small Rounded-md" styles="text-sm rounded-md bg-green-500 text-white" />
        <Button title="Small Rounded-full" styles="text-sm rounded-full bg-red-500 text-white" />

        {/* Medium Buttons */}
        <Button title="Medium Rounded-sm" styles="text-base rounded-sm bg-blue-500 text-white" />
        <Button title="Medium Rounded-md" styles="text-base rounded-md bg-green-500 text-white" />
        <Button title="Medium Rounded-full" styles="text-base rounded-full bg-red-500 text-white" />

        {/* Large Buttons */}
        <Button title="Large Rounded-sm" styles="text-lg rounded-sm bg-blue-500 text-white" />
        <Button title="Large Rounded-md" styles="text-lg rounded-md bg-green-500 text-white" />
        <Button title="Large Rounded-full" styles="text-lg rounded-full bg-red-500 text-white mb-10" />
      </div>
    </div>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Landing;
