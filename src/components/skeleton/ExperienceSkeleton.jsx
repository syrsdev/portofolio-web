import React from "react";

const ExperienceSkeleton = () => {
    return (
        <div className="w-full animate-pulse">
            <div className="grid grid-cols-3 gap-4 mb-3">
                <div className="h-4 col-span-2 rounded bg-slate-200"></div>
                <div className="h-4 col-span-1 rounded bg-slate-200"></div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-3">
                <div className="h-4 col-span-1 rounded bg-slate-200"></div>
                <div className="h-4 col-span-2 rounded bg-slate-200"></div>
            </div>
        </div>
    );
};

export default ExperienceSkeleton;
