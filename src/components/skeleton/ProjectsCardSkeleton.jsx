import React from "react";

const ProjectsCardSkeleton = ({ classname = "flex" }) => {
    return (
        <div
            className={`relative flex-col w-full bg-gray-300 rounded-md cursor-pointer h-96 animate-pulse group ${classname}`}
        ></div>
    );
};

export default ProjectsCardSkeleton;
