import SVGgenerator from '../assets/images/SVG logo maker.png';
import READMEgenerator from '../assets/images/README generator.png';
import ecommmerceBackend from '../assets/images/E-Commerce Backend.png';

import React from 'react'

const Project = ({ id = "default-id" }) => {
    const projects = [
        { name: "SVG Image Generator", image: SVGgenerator },
        { name: "README File Generator", image: READMEgenerator},
        { name: "E-Commerce Backend", image: ecommmerceBackend },
    ];

    return (
        <div>
            <h2>Projects</h2>
            <div id={id} className="grid p-6">
                {projects.map((project, index) => (
                <div key={index} className="border border-3 border-slate-300 rounded-lg p-6 shadow-xl hover:animate-subtleBounce">
                    <img src={project.image} alt={project.name} className="w-full w object-cover rounded mb-4" />
                    <h3 className="text-xl font-bold">{project.name}</h3>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Project;